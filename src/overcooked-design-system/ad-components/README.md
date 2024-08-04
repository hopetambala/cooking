# Ad FAQs

## Why isn't my ad rendering?

So many reasons.

1. The parent container of your ad might not have a set width. If you place a responsive ad code within a parent container that doesn’t have an explicit width set, for example, within a floating element, then the ad code won’t be able to calculate the required size for the responsive ad unit.
2. Naughty re-renders. Since Next.js can do both client-side hydration and server-side rendering, we can cause issues when our ad components re-render. We need our ad slots to render once.

`useEffect` is okay if there's an empty dependency array. This ensures that `window.adsbygoogle.push()` will only trigger once.

## Types of Display Ads

1. Banner Ads
   Description: Banner ads are the most traditional form of display advertising. They come in various sizes and can be static or animated.
   Common Sizes:

- Leaderboard (728x90): Often found at the top of a webpage.
- Skyscraper (120x600): Usually placed on the sides of a webpage.
- Medium Rectangle (300x250): Versatile and commonly found within the content or at the end of articles.
  Usage: Great for broad reach and brand awareness. They are often used in programmatic advertising.

2. Interstitial Ads
   Description: Full-screen ads that appear at natural transition points, such as between app screens or during content loading times on a website.
   Advantages: High engagement due to their full-screen nature.
   Challenges: Can be seen as intrusive if not timed correctly. Best used sparingly.

3. Rich Media Ads
   Description: Ads that include interactive elements such as videos, audio, and clickable features.
   Examples: Expandable banners, floating ads, or interactive video ads.
   Usage: Used to create a more engaging experience and encourage interaction. Suitable for campaigns aiming for high user engagement.

4. Video Ads
   Description: Ads in video format that can appear before (pre-roll), during (mid-roll), or after (post-roll) video content.
   Types:

- In-Stream Video Ads: Played within video content.
- Out-Stream Video Ads: Played outside of video content, such as in-article videos.
  Advantages: Highly engaging and can convey a lot of information quickly.

5. Native Ads
   Description: Ads that match the look, feel, and function of the media format in which they appear.
   Examples: Sponsored articles, recommended content, and in-feed social media ads.
   Usage: Great for non-intrusive advertising. Ideal for content marketing and blending promotional material with editorial content.

6. Responsive Ads
   Description: Ads that automatically adjust their size, appearance, and format to fit available ad spaces.
   Advantages: Flexibility and ease of creation. Can appear as text, image, or native ads.
   Usage: Suitable for dynamic environments and diverse device formats.

7. Pop-Up and Pop-Under Ads
   Description: Pop-up ads appear in a new window/tab on top of the current browser window, while pop-under ads appear behind the current browser window.
   Advantages: Can capture attention immediately.
   Challenges: Often seen as disruptive and can lead to a negative user experience if overused.

8. Overlay Ads
   Description: Ads that appear as an overlay on top of webpage content or video.
   Examples: Semi-transparent ads that allow users to see the content beneath them.
   Usage: Common in video monetization to display ads without interrupting the viewing experience.

9. Retargeting Ads
   Description: Ads that target users who have previously visited a website or interacted with a brand.
   Mechanism: Uses cookies to track users and show them relevant ads as they browse other websites.
   Advantages: High conversion rates as they target users who have already shown interest.

10. Expandable Ads
    Description: Ads that expand in size when a user interacts with them.
    Examples: A small banner that expands to reveal more content upon hover or click.
    Advantages: Provides additional space for content and interaction without permanently taking up page space.

11. Floating Ads
    Description: Ads that float over the webpage content and often follow the user as they scroll.
    Advantages: High visibility and can be engaging.
    Challenges: Can be intrusive if not implemented carefully.

12. Lightbox Ads
    Description: Ads that expand into a larger format when clicked, often containing rich media like video or interactive elements.
    Usage: Great for immersive brand experiences and storytelling.
    Advantages: Engaging and can capture user attention effectively.

## Sample Tag from Google

### Responsive

```html
 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-12345678910"
      crossorigin="anonymous"></script>

<ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-12345678910"
      data-ad-slot="12345678"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>

 <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
 </script>
 ```

### In-Article

Place the ad inside any of your pages that have text. We suggest 2 paragraphs below the start of the article. However, don't place the ad in the sidebar as this can negatively affect performance.

Important: If you’d like to place more than one ad, make sure you allow for sufficient content in between ads to minimize disruption to your readers.

```html
 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-123456789107"
     crossorigin="anonymous"></script>

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-12345678910"
     data-ad-slot="12345678"></ins>

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```
