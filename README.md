# 💍 Will You Be Mine? ✨

A beautiful, interactive proposal website built with HTML, CSS, and JavaScript.

## Features ✨

- 🎨 **Romantic Design**: Beautiful gradient backgrounds with smooth animations
- 💕 **Heartfelt Message**: A personalized proposal message
- ⏱️ **Countdown Timer**: Countdown to the big moment
- 📸 **Memories Section**: Share inside jokes and pet names
- 🎉 **Interactive Elements**: Click through different sections with smooth transitions
- 💍 **Proposal Page**: The main event with a surprise reveal
- 🎊 **Celebration**: Confetti animation and celebration message
- 📱 **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- ⌨️ **Keyboard Navigation**: Use arrow keys to navigate between sections

## How to Customize

### 1. Edit the Message
Open `index.html` and find the message section to personalize it with your own words.

### 2. Add Your Inside Jokes
In the memories section, replace the placeholder inside jokes with your actual pet names and song lyrics.

### 3. Change the Countdown Date
In `script.js`, find the `startCountdown()` function and modify the target date:
```javascript
const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000);
