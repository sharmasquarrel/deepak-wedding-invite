# Audio placeholders

Drop your MP3 files into this folder. The site expects these four filenames by
default:

```
assets/audio/track-1.mp3
assets/audio/track-2.mp3
assets/audio/track-3.mp3
assets/audio/track-4.mp3
```

You can use any filenames and any number of tracks — just update the `playlist`
array in `js/app.js`:

```js
playlist: [
  { src: 'assets/audio/my-song.mp3', title: 'My Song' },
  { src: 'assets/audio/another.mp3', title: 'Another Song' }
],
```

## How playback behaves

- **One shared player.** The same `<audio>` element runs across every page, so
  the music never restarts or changes when the invitation moves to the next
  page.
- **Shuffled every time.** The playlist order is randomised on each page load,
  and reshuffled again every time the queue is exhausted, so guests rarely hear
  the same sequence twice.
- **Starts on the first tap.** Browsers block audio autoplay until the user
  interacts with the page, which is exactly what the "Open Invitation" button on
  the entry screen is for.
- **Missing files are handled gracefully.** If a track 404s, the player skips to
  the next one. If none of the tracks can be played, it goes quiet instead of
  looping on errors.

## Practical tips

- Keep each file under roughly 2–3 MB (128 kbps is plenty for background music)
  so the invitation loads quickly on mobile data.
- Trim long intros — guests only hear the first minute or so in most visits.
- Make sure you have the right to distribute the music you upload, especially if
  the invitation will be shared publicly.
