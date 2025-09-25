# Video Hosting Guide for Frozen In Time

## 🎭 For Art Performance Videos (Including Nude Art)

### 🥇 Best Option: Internet Archive (archive.org)

**Perfect for 25-minute art performance videos with nude content:**

#### Content Policy:
- ✅ **Artistic nude content ALLOWED** - Explicitly supports fine art
- ✅ **Performance art protected** - Academic/cultural exception
- ✅ **No censorship for art** - Unlike commercial platforms
- ✅ **Museum-quality hosting** - Used by galleries worldwide
- ✅ **Permanent archival** - Won't disappear or get flagged

#### File Size Handling:
- ✅ **No file size limits** - Can handle hours of video
- ✅ **Free bandwidth** - No extra costs for large files
- ✅ **Automatic compression** - Optimizes for web streaming
- ✅ **Multiple quality options** - Viewers can choose quality

### Compression Tips for 25-Minute Videos:

#### Option 1: Medium Quality (Recommended)
```bash
# Using ffmpeg (free tool):
ffmpeg -i input.mov -c:v libx264 -crf 28 -c:a aac -b:a 128k output.mp4
# Result: ~200-400MB for 25 minutes
```

#### Option 2: Lower Quality (Smaller file)
```bash
ffmpeg -i input.mov -c:v libx264 -crf 32 -s 720x480 -c:a aac -b:a 96k output.mp4  
# Result: ~100-200MB for 25 minutes
```

#### Option 3: Archive.org Will Handle It
- Just upload your original file
- Archive.org automatically creates multiple quality versions
- Viewers can choose between 240p, 480p, 720p, etc.

### Why NOT Other Platforms:

#### YouTube:
- ❌ **Strict nude policy** - Will remove art performance videos
- ❌ **AI flagging system** - Flags nude art as inappropriate
- ❌ **No appeal process** for art - Very difficult to restore

#### Vimeo:
- ⚠️ **Inconsistent policy** - Sometimes allows, sometimes removes
- ⚠️ **Manual review required** - Could take weeks
- ❌ **Limited free storage** - Not good for 25-minute videos

#### GitHub:
- ❌ **25MB limit** - Your video would be 500MB-2GB
- ❌ **Not designed for video** - Poor streaming performance

### How to Use:
1. Go to [archive.org](https://archive.org)
2. Create free account
3. Click "Upload" → Choose your video file
4. Add title, description, tags
5. Set to "Creative Commons" or "Public Domain"
6. Wait for processing (10-30 minutes)
7. Get the direct video URL

### Example URLs:
```
https://archive.org/download/your-identifier/your-video.mp4
https://ia801504.us.archive.org/21/items/your-identifier/your-video.mp4
```

## 🥈 Alternative: GitHub Releases (for small videos)

### Pros:
- ✅ Same domain as your site
- ✅ No external dependencies
- ✅ Fast loading

### Cons:
- ❌ 25MB file limit
- ❌ Not optimized for streaming
- ❌ No video player controls

### How to Use:
1. Go to your GitHub repository
2. Click "Releases" → "Create a new release"
3. Upload video file (must be under 25MB)
4. Publish release
5. Copy the download URL

## 🥉 Backup Option: Vimeo

### Pros:
- ✅ Professional quality
- ✅ Customizable player
- ✅ Art community friendly
- ✅ Privacy controls

### Cons:
- ❌ Weekly upload limits (free plan)
- ❌ Requires embedding (not direct URLs)

## 🚫 Why Not YouTube?
- Too commercial for art projects
- Aggressive recommendation system
- May flag experimental content
- Not suitable for "frozen in time" aesthetic

## Implementation in Your Code

Replace line 671 in script.js:
```javascript
// OLD:
iframe.src = "https://www.youtube.com/embed/dQw4w9WGXcQ?autoplay=1&mute=1";

// NEW (Internet Archive):
iframe.src = "https://archive.org/embed/your-video-identifier";

// OR for direct HTML5 video:
iframe.innerHTML = `
  <video controls width="100%" height="400">
    <source src="https://archive.org/download/your-identifier/video.mp4" type="video/mp4">
    Your browser doesn't support HTML5 video.
  </video>
`;
```

## File Size Tips
- **HD quality**: Keep under 100MB for good loading
- **Compression**: Use H.264 codec, moderate bitrate
- **Duration**: 2-5 minutes optimal for art pieces
- **Format**: MP4 is most compatible

## Next Steps
1. Upload your video to Internet Archive
2. Get the embed URL or direct video URL
3. Replace the YouTube URL in your loadVideo() function
4. Test on mobile and desktop

Archive.org is perfect for your "Frozen In Time" art project! 🎨❄️⏰