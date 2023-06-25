let lastSongTitle = ''

// Function to check for changes in media session metadata
// Function to check for changes in media session metadata
function checkMediaSessionMetadata() {
  if ('mediaSession' in navigator && 'metadata' in navigator.mediaSession) {
    const metadata = navigator.mediaSession.metadata
    if (metadata && metadata.title && metadata.title !== lastSongTitle) {
      lastSongTitle = metadata.title
      sendSongTitle(lastSongTitle)
    }
  }
}

// Send the song title to the background script
function sendSongTitle(songTitle) {
  chrome.runtime.sendMessage({ songTitle })
}

// Poll for changes in media session metadata every second
setInterval(checkMediaSessionMetadata, 1000)
