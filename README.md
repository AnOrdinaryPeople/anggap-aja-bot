# Anggap Aja Bot
This bot **SUPPOSED** to showing random memes from [Reddit](https://reddit.com) and [Twitter](https://twitter.com).

Basically this bot just take random post from subreddit or tweets at `config.json`.

You can change command name, description or the others at `command.json`.

# Installation
### Requirements
Just latest version of [node.js](https://nodejs.org/en/download/current/) and [Git](https://git-scm.com/downloads)

### Install
1. Clone this project `git clone https://github.com/AnOrdinaryPeople/discord-bot.git`
1. Duplicate config `cp example-config.json config.json`
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
       
       Client ID from your bot https://discordapp.com/developers/applications
    1. cmd
    
        Command to trigger the bot. Default is `=`
    1. log
       
       Enable request log
    1. owner
       
        Your Discord ID https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
    1. token
       
       Your bot token https://discordapp.com/developers/applications/YOUR_BOT_CLIENT_ID/bot
    1. subreddit
       
       These subreddit that post memes. You can change or add it if you want.
    1. twitter
       
       Maybe this a little bit difficult to adjust [Twitter API](https://developer.twitter.com). You need API Key and Access Token.
       - **tweets**
         
         At this you will find `user_id` and `screen_name`. screen_name like `@WholesomeMeme`. user_id you can find it at this [link](http://gettwitterid.com).
 1. Run the bot
    
    **IMPORTANT** make sure your bot already at your server. Here the [tutorial](https://github.com/jagrosh/MusicBot/wiki/Adding-Your-Bot-To-Your-Server)
    1. Open terminal
    1. type `node .`

### create command
if you're too lazy to creating command in `cmd` and creating object at `command.json` just run this command in your terminal

`node create your_command "description (optional)" "usage (optional)"`

quick example:
- `node create dorime`
- `node create yeet "idk how to describing this description :("`
- `node create comrade "*playing soviet anthem*" "opening google: how to explain usage?"`

### uhhhmm.....
Here some references if you want to make your own bot.
- [Discord.js](https://discordjs.guide)
- [Discord API](https://discordapp.com/developers/docs)
- [Reddit API](https://www.reddit.com/dev/api)
- [Twitter API](https://developer.twitter.com/en/docs)
