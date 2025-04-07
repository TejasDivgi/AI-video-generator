export const generateMP4FromScript = async (script) => {
  // Step 1: Retrieve the list of available voices
  const voicesResponse = await fetch('https://client.camb.ai/apis/list-voices', {
    method: 'GET',
    headers: {
      'x-api-key': '2198531e-0a1b-4a71-9291-71b527a1a135',
    },
  });

  if (!voicesResponse.ok) {
    console.error('❌ Failed to retrieve voices list');
    return;
  }

  const voicesData = await voicesResponse.json();
  const availableVoices = voicesData.voices;

  console.log("✅ Available Voices:", availableVoices);

  if (!availableVoices || availableVoices.length === 0) {
    console.error('❌ No available voices found');
    return;
  }

  // Select the first available voice
  const selectedVoice = availableVoices[0];

  if (!selectedVoice || !selectedVoice.id) {
    console.error('❌ No suitable voice_id found');
    return;
  }

  const voiceId = selectedVoice.id;
  console.log('🎤 Using voice_id:', voiceId);

  // Step 2: Process each scene in the script
  for (let i = 0; i < script.length; i++) {
    const scene = script[i];
    const options = {
      method: 'POST',
      headers: {
        'x-api-key': '2198531e-0a1b-4a71-9291-71b527a1a135',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voice_id: voiceId,
        text: scene.ContentText,
        language: 1, // Assuming '1' is the desired language ID
      }),
    };

    try {
      // Send TTS request
      const response = await fetch('https://client.camb.ai/apis/tts-stream', options);

      if (!response.ok) {
        const errorResult = await response.json();
        console.error(`❌ TTS request failed for scene ${i + 1}:`, errorResult);
        continue;
      }

      const result = await response.json();
      const taskId = result.task_id;

      if (!taskId) {
        console.error(`❌ Failed to obtain task_id for scene ${i + 1}`);
        continue;
      }

      // Poll for task completion
      let audioUrl = null;
      const maxAttempts = 10;
      let attempts = 0;

      while (attempts < maxAttempts) {
        const statusResponse = await fetch(`https://client.camb.ai/apis/tts/${taskId}`, {
          method: 'GET',
          headers: {
            'x-api-key': '2198531e-0a1b-4a71-9291-71b527a1a135',
          },
        });

        const statusResult = await statusResponse.json();

        if (statusResult.status === 'completed') {
          audioUrl = statusResult.stream_url;
          break;
        } else if (statusResult.status === 'failed') {
          console.error(`❌ TTS generation failed for scene ${i + 1}`);
          break;
        }

        // Wait before polling again
        await new Promise((resolve) => setTimeout(resolve, 3000));
        attempts++;
      }

      if (audioUrl) {
        console.log(`✅ Scene ${i + 1} audio URL:`, audioUrl);
        // Proceed with further processing (e.g., combine with image)
      } else {
        console.error(`❌ Failed to retrieve audio URL for scene ${i + 1} after ${maxAttempts} attempts.`);
      }
    } catch (err) {
      console.error(`❌ Error generating audio for scene ${i + 1}:`, err);
    }
  }
};
