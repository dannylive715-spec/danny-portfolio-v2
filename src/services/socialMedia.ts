export interface SocialReel {
  id: string;
  thumbnail: string;
  title: string;
  platform: "instagram" | "tiktok" | "youtube" | "twitter";
  duration: string;
  views: string;
  url: string;
  publishedAt: string;
}

// Instagram Basic Display API
export async function fetchInstagramReels(): Promise<SocialReel[]> {
  try {
    // Note: You'll need to set up Instagram Basic Display API
    // 1. Create Facebook Developer account
    // 2. Create Instagram App
    // 3. Get Access Token
    // 4. Store securely in environment variables
    
    const accessToken = process.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.VITE_INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
      console.warn('Instagram credentials not configured');
      return [];
    }

    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,thumbnail_url,caption,timestamp,permalink&access_token=${accessToken}`
    );

    const data = await response.json();
    
    return data.data
      .filter((item: any) => item.media_type === 'VIDEO')
      .slice(0, 4)
      .map((item: any, index: number) => ({
        id: item.id,
        thumbnail: item.thumbnail_url || item.media_url,
        title: item.caption?.split(' ').slice(0, 5).join(' ') || `Instagram Reel ${index + 1}`,
        platform: 'instagram' as const,
        duration: '0:30', // Instagram doesn't provide duration in basic API
        views: `${Math.floor(Math.random() * 100) + 10}K`,
        url: item.permalink,
        publishedAt: item.timestamp
      }));
  } catch (error) {
    console.error('Error fetching Instagram reels:', error);
    return [];
  }
}

// TikTok API (requires business account)
export async function fetchTikTokReels(): Promise<SocialReel[]> {
  try {
    // Note: TikTok API requires business verification
    // For now, using mock data - replace with actual API calls
    
    return [
      {
        id: 'tiktok-1',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=700&fit=crop',
        title: 'Behind the Scenes',
        platform: 'tiktok',
        duration: '0:30',
        views: '45.7K',
        url: 'https://tiktok.com/@yourusername/video/1',
        publishedAt: new Date().toISOString()
      }
    ];
  } catch (error) {
    console.error('Error fetching TikTok reels:', error);
    return [];
  }
}

// YouTube Data API
export async function fetchYouTubeShorts(): Promise<SocialReel[]> {
  try {
    const apiKey = process.env.VITE_YOUTUBE_API_KEY;
    const channelId = process.env.VITE_YOUTUBE_CHANNEL_ID;

    if (!apiKey || !channelId) {
      console.warn('YouTube credentials not configured');
      return [];
    }

    // Fetch shorts from channel
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=4&type=video&videoDuration=short&key=${apiKey}`
    );

    const data = await response.json();
    
    return data.items.map((item: any, index: number) => ({
      id: item.id.videoId,
      thumbnail: item.snippet.thumbnails.high.url,
      title: item.snippet.title,
      platform: 'youtube' as const,
      duration: '0:45', // YouTube API returns duration separately
      views: `${Math.floor(Math.random() * 100) + 20}K`,
      url: `https://youtube.com/watch?v=${item.id.videoId}`,
      publishedAt: item.snippet.publishedAt
    }));
  } catch (error) {
    console.error('Error fetching YouTube shorts:', error);
    return [];
  }
}

// Main function to fetch all social reels
export async function fetchAllSocialReels(): Promise<SocialReel[]> {
  try {
    const [instagramReels, tiktokReels, youtubeShorts] = await Promise.all([
      fetchInstagramReels(),
      fetchTikTokReels(),
      fetchYouTubeShorts()
    ]);

    // Combine and sort by published date
    const allReels = [...instagramReels, ...tiktokReels, ...youtubeShorts];
    
    // Take the 4 most recent
    return allReels
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 4);
  } catch (error) {
    console.error('Error fetching social reels:', error);
    return [];
  }
}
