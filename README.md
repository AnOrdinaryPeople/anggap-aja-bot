# Meme Bot
This bot **SUPPOSED** to showing random memes from [Reddit](https://reddit.com) and Indonesia memes from [Twitter](https://twitter.com/MemeComicIndo).

### Requirements
Just latest version of [node.js](https://nodejs.org/en/download/current/) and [Git](https://git-scm.com/downloads)

### Installation
1. Clone this project to your drive
    1. Open the `explorer`
    1. Go to `D:`
    1. Right click and choose `Git Bash Here`
    1. Paste this to your terminal `git clone https://github.com/AnOrdinaryPeople/discord-bot.git`
1. Rename `example-config.json` to `config.json`
1. Adjust the `config.json`
    1. activity
        - **name**: you can customize it
        - **type**: choose one below this
          - PLAYING
          - STREAMING
          - LISTENING
          - WATCHING
          - CUSTOM_STATUS
    1. client
       
       Client ID from your bot. [Discord Developer Portal](https://discordapp.com/developers/applications).
    1. cmd
    
        Command to trigger the bot. Default is `=`.
    1. log
       
       Enable request log.
    1. owner
       
        Your Discord ID. [Support Discord](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).
    1. token
       
       Your bot token. You can find it at this link `https://discordapp.com/developers/applications/YOUR_BOT_CLIENT_ID/bot`.
    1. subreddit
       
       These subreddit that post memes. You can change or add it if you want.
    1. twitter
       
       Maybe this a little bit difficult to adjust [Twitter API](https://developer.twitter.com). You need API Key and Access Token for.
 1. Run the bot
    
    **Important** make sure your bot already at your server. [Tutorial](https://github.com/jagrosh/MusicBot/wiki/Adding-Your-Bot-To-Your-Server)
    1. Open `Git Bash Here` inside the project
    1. type `node .`
