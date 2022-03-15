<!-- 
    The header component for twrm.io project.
    Created On 15 March 2022
 -->

 <script lang="ts">
    import Logo from './logo.svg'
    import GitHubIcon from './icons/github.svg'
    import TwitterIcon from './icons/twitter.svg'
    import DiscordIcon from './icons/discord.svg'
    import SettingsIcon from './icons/settings.svg'
 </script>

 <header class="z-50 px-6 py-6 w-full text-black">
    <div class="container flex justify-between">
        <a href="/">
            <Logo/>
        </a>
        <div class="social flex items-center text-lg">
            <!-- GitHub repository -->
            <a href="https://github.com/vsnthdev/twrm.io" target="_blank" rel="noopener" class="mx-2 transition-opacity opacity-70 hover:opacity-100">
                <GitHubIcon/>
            </a>

            <!-- Twitter profile -->
            <a href="https://vas.cx/twitter" target="_blank" rel="noopener" class="mx-2 transition-opacity opacity-70 hover:opacity-100">
                <TwitterIcon/>
            </a>

            <!-- Discord server -->
            <a href="https://vas.cx/discord" target="_blank" rel="noopener" class="mx-2 transition-opacity opacity-70 hover:opacity-100">
                <DiscordIcon/>
            </a>

            <!-- Setting cog -->
            <button class="settings-btn mx-3 cursor-pointer">
                <SettingsIcon/>
            </button>
        </div>
    </div>
 </header>
