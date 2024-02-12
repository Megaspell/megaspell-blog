---
title: "Progress report - January 2024"
date: "2024-02-12"
featuredImage: './preview.png'
---

In January work was mostly focused on behind the scenes stuff, so there's only 3 new features we'll talk about: new
projectile mechanics, E.F.S. and chat.

Update is available in launcher ([**Windows**](https://github.com/Megaspell/MegaspellLauncher/releases/latest/download/Megaspell-Launcher-Installer.exe), [**Linux**](https://github.com/Megaspell/MegaspellLauncher/releases/latest/download/Megaspell-Launcher.AppImage)) or by [direct link](https://github.com/Megaspell/Megaspell-Releases).

# Month's progress

## New projectiles

Until now, we had two types of projectiles: instant rays, and kinetic. Instant ones were used for all bullets and
lasers, and kinetic were used only for missiles and plasma.  
Tests with real players shown that instant projectiles is very bad decision - when all bullets are guaranteed hit, there
is no skill involved.
Almost always the one starting the fight will end up winning. Combat was reduced to "stay still and activate SATS".

To solve this we added travel time to all projectiles - even to lasers. As a result:

- Weapon type differentiation is much more clear. It is way harder to use guns with slow bullets on farther ranges.
- Sniper rifles now have a reason to exist. Before that there were no real reasons to use one, because any assault rifle
  had greater DPS and same range. But now high velocity bullets are an advantage on range.
- Shotguns with slugs now won't be a 1-to-1 replacement for long range rifles, because slugs are slow.
- It's possible to change projectile speed and size in flight, as well as apply gravity. Right now this isn't used, but
  later it'll be useful for special weapons like flamethrower.
- Visible tracers just look better ;)

<iframe width="560" height="315" src="https://www.youtube.com/embed/1jT5ZTprm3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Eyes Forward Sparkle (E.F.S.)

We tried multiple different implementations, but so far the best one is NPC target markers on the edge of the screen.

There are different marker types for NPCs in plain sight, behind an obstacle, or outside visible area.
Also, we added an option to disable showing markers for friendly and neutral NPCs for those who prefer clean HUD.

![](./efs1.png)
![](./efs2.png)

## Chat

We added a chat system that supports different channels, including all/team/private.

![](./chat1.png)

Also, server will use chat for some system messages, and admins can broadcast such messages by using `broadcast "text"`
console command. с [Rich Text](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) formatting
is supported.

# Full changelog

## Fixes
- Options menu layout glitching when toggling v-sync option on/off.
- Negative displayed weight when equipping weapons and armor in PipBuck.
- "Show quest target" was showing player location on first use.
- It was impossible to use Enter to submit add server form.
- Fixed character shadows (which apparently didn't work at all)
- Fixed animations of some weapons (Missile Launcher, recoil, etc)
- Interactions.Talk pointed to wrong localization table.

## UI
- Quest updates are now showing on HUD.
- Implemented chat system: including system, player, private messages.
- Now broadcasting player join/leave, and team change messages in chat.
- Now you can also exit item container UI using PipBuck button (Tab).
- Added loading screen for level loading, now players without SSD won't stare into black screen.

## Gameplay
- Now all projectiles have travel time - lasers almost instant, shotguns fairly slow.
- Double-Barrel Shotgun now can shoot one shell at a time.

## Graphics
- New VFX for laser trails

## Other
- Added `despawn` command to despawn smart objects and `kill` command to kill characters.
- Updated localization.
- Optimized bullet impact effects.
- Logs from embedded server are now redirected to host client's console.
- DM loadout configuration was moved to datapacks.

# Plans for next month
- Continue to move context to datapacks.
- Add difficulty settings ASAP. Important note: this is needed not for literal "difficulty" control but for devs to tweak and test different gameplay aspects in-game.
  We want to have configuration as extensive as in STALKER Anomaly, you'll be able to configure all gameplay and economy aspects.\
- Complete download of server datapacks by clients, so clients won't be required to manually install same datapacks to play on server. In other words, a feature like in Garry's Mod.
- Implement levels, earning XP, getting perk/skill allocation points for new level, and unlocking perks / leveling up skills.