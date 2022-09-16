(()=>{var i={9704:function(){(function(){"use strict";var i=document.createElement("style");i.innerHTML="@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;top:-1px;bottom:-1px;width:100%;z-index:99999;color:#fff;background-color:#000;opacity:0;overflow:hidden;-webkit-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s ease-out;font-family:Arial,sans-serif;font-size:16px;font-weight:400;contain:strict;touch-action:none;pointer-events:none}#spotlight.show{opacity:1;transition:none;pointer-events:auto}#spotlight.white{color:#212529;background-color:#fff}#spotlight.white .spl-next,#spotlight.white .spl-page~*,#spotlight.white .spl-prev,#spotlight.white .spl-spinner{filter:invert(1)}#spotlight.white .spl-progress{background-color:rgba(0,0,0,.35)}#spotlight.white .spl-footer,#spotlight.white .spl-header{background-color:rgba(255,255,255,.65)}#spotlight.white .spl-button{background:#212529;color:#fff}.spl-footer,.spl-header{background-color:rgba(0,0,0,.45)}#spotlight .contain,#spotlight .cover{object-fit:cover;height:100%;width:100%}#spotlight .contain{object-fit:contain}#spotlight .autofit{object-fit:none;width:auto;height:auto;max-height:none;max-width:none;transition:none}.spl-scene,.spl-spinner,.spl-track{width:100%;height:100%;position:absolute}.spl-track{contain:strict}.spl-spinner{background-position:center;background-repeat:no-repeat;background-size:42px;opacity:0}.spl-spinner.spin{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+);transition:opacity .2s linear .25s;opacity:1}.spl-spinner.error{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsMUExNSwxNSwwLDEsMCwzMSwxNiwxNSwxNSwwLDAsMCwxNiwxWm0wLDJhMTMsMTMsMCwwLDEsOC40NSwzLjE0TDYuMTQsMjQuNDVBMTMsMTMsMCwwLDEsMTYsM1ptMCwyNmExMywxMywwLDAsMS04LjQ1LTMuMTRMMjUuODYsNy41NUExMywxMywwLDAsMSwxNiwyOVoiIGlkPSJiYW5fc2lnbl9jcm9zc2VkX2NpcmNsZSIvPjwvc3ZnPg==);background-size:128px;transition:none;opacity:.5}.spl-scene{transition:transform .65s cubic-bezier(.1,1,.1,1);contain:layout size;will-change:transform}.spl-pane>*{position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1);transition:transform .65s cubic-bezier(.3,1,.3,1),opacity .65s ease;contain:layout style;will-change:transform,opacity;visibility:hidden}.spl-header,.spl-pane,.spl-progress{position:absolute;top:0}.spl-pane{width:100%;height:100%;transition:transform .65s cubic-bezier(.3,1,.3,1);contain:layout size;will-change:transform,contents}.spl-header{width:100%;height:50px;text-align:right;transform:translateY(-100px);transition:transform .35s ease;overflow:hidden;will-change:transform}#spotlight.menu .spl-footer,#spotlight.menu .spl-header,.spl-footer:hover,.spl-header:hover{transform:translateY(0)}.spl-header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:50px;opacity:.5}.spl-progress{width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform linear}.spl-footer,.spl-next,.spl-prev{position:absolute;transition:transform .35s ease;will-change:transform}.spl-footer{left:0;right:0;bottom:0;line-height:20px;padding:20px 20px 0;padding-bottom:env(safe-area-inset-bottom,0);text-align:left;font-size:15px;font-weight:400;transform:translateY(100%)}.spl-title{font-size:22px}.spl-button,.spl-description,.spl-title{margin-bottom:20px}.spl-button{display:inline-block;background:#fff;color:#000;border-radius:5px;padding:10px 20px;cursor:pointer}.spl-next,.spl-page~*,.spl-prev{background-position:center;background-repeat:no-repeat}.spl-page{float:left;width:auto;line-height:50px}.spl-page~*{background-size:21px;float:right}.spl-fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}.spl-fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}.spl-autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}.spl-zoom-in,.spl-zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=);background-size:22px}.spl-zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}.spl-download{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNDEuNzMycHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0MS43MzIgMTQxLjczMiIgd2lkdGg9IjE0MS43MzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIwLjY3NCwxMjUuMTM4SDIwLjc5M3YxNi41OTRoOTkuODgxVjEyNS4xMzh6IE0xMTkuMDE5LDU4Ljc3NmMtMi41NjEtMi41NjItNi43MTYtMi41NjItOS4yNzUsMEw3Ny4yMSw5MS4zMTJWNi41NjIgICBDNzcuMjEsMi45MzYsNzQuMjY5LDAsNzAuNjQ4LDBjLTMuNjI0LDAtNi41NiwyLjkzNy02LjU2LDYuNTYzdjg0Ljc1TDMxLjk5Miw1OS4yMThjLTIuNTYyLTIuNTY0LTYuNzE1LTIuNTY0LTkuMjc3LDAgICBjLTIuNTY1LDIuNTYyLTIuNTY1LDYuNzE2LDAsOS4yNzlsNDMuMjk0LDQzLjI5M2MwLjE1LDAuMTU0LDAuMzE0LDAuMjk5LDAuNDgxLDAuNDM4YzAuMDc2LDAuMDYyLDAuMTU1LDAuMTEzLDAuMjM0LDAuMTc2ICAgYzAuMDk0LDAuMDY1LDAuMTg2LDAuMTQyLDAuMjc5LDAuMjA2YzAuMDk3LDAuMDYzLDAuMTkyLDAuMTE0LDAuMjg2LDAuMTc0YzAuMDg4LDAuMDU0LDAuMTc0LDAuMTA1LDAuMjY1LDAuMTUzICAgYzAuMSwwLjA1NiwwLjE5OSwwLjEsMC4yOTgsMC4xNDdjMC4wOTcsMC4wNDUsMC4xOSwwLjA5MSwwLjI4MywwLjEzMmMwLjA5OCwwLjA0LDAuMTk2LDAuMDcyLDAuMjk1LDAuMTA1ICAgYzAuMTA0LDAuMDM4LDAuMjA3LDAuMDc4LDAuMzEyLDAuMTA5YzAuMTAxLDAuMDMsMC4xOTcsMC4wNTIsMC4yOTcsMC4wNzdjMC4xMDgsMC4wMjMsMC4yMTQsMC4wNTgsMC4zMjQsMC4wNzggICBjMC4xMTUsMC4wMjEsMC4yMzEsMC4wMzMsMC4zNDYsMC4wNTRjMC4wOTcsMC4wMTUsMC4xOTIsMC4wMzIsMC4yODksMC4wNDJjMC40MywwLjA0MiwwLjg2NSwwLjA0MiwxLjI5NSwwICAgYzAuMS0wLjAxLDAuMTkxLTAuMDI3LDAuMjg5LTAuMDQyYzAuMTE0LTAuMDIxLDAuMjMzLTAuMDI5LDAuMzQ0LTAuMDU0YzAuMTA5LTAuMDIxLDAuMjE3LTAuMDU1LDAuMzI0LTAuMDc4ICAgYzAuMTAyLTAuMDI1LDAuMTk5LTAuMDQ3LDAuMjk5LTAuMDc3YzAuMTA1LTAuMDMxLDAuMjA3LTAuMDcxLDAuMzEyLTAuMTA5YzAuMTAyLTAuMDMsMC4xOTUtMC4wNjIsMC4yOTUtMC4xMDUgICBjMC4wOTYtMC4wNDEsMC4xOTEtMC4wODcsMC4yODMtMC4xMzJjMC4xLTAuMDQ4LDAuMTk5LTAuMDkyLDAuMjk3LTAuMTQ3YzAuMDkxLTAuMDQ4LDAuMTc3LTAuMTA0LDAuMjY0LTAuMTUzICAgYzAuMDk4LTAuMDYsMC4xOTMtMC4xMSwwLjI4Ny0wLjE3NGMwLjA5Ni0wLjA2NCwwLjE4OS0wLjE0MSwwLjI4MS0wLjIwNmMwLjA3Ni0wLjA2MiwwLjE1Ni0wLjExMywwLjIzMy0wLjE3NiAgIGMwLjI0OS0wLjIwNCwwLjQ3OS0wLjQzNywwLjY5NC0wLjY3YzAuMDc2LTAuMDY3LDAuMTU0LTAuMTMxLDAuMjI5LTAuMjAzbDQzLjI5NC00My4yOTYgICBDMTIxLjU4MSw2NS40OTEsMTIxLjU4MSw2MS4zMzcsMTE5LjAxOSw1OC43NzYiLz48L2c+PC9zdmc+);background-size:20px}.spl-theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}.spl-play{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}.spl-play.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}.spl-close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}.spl-next,.spl-prev{top:50%;width:50px;height:50px;opacity:.65;background-color:rgba(0,0,0,.45);border-radius:100%;cursor:pointer;margin-top:-25px;transform:translateX(-100px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=);background-size:30px}.spl-prev{left:20px}.spl-next{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .spl-prev{transform:translateX(0)}#spotlight.menu .spl-next{transform:translateX(0) scaleX(-1)}@media (hover:hover){.spl-page~div{cursor:pointer;transition:opacity .2s ease}.spl-next:hover,.spl-page~div:hover,.spl-prev:hover{opacity:1}}@media (max-width:500px){.spl-header div{width:44px}.spl-footer .spl-title{font-size:20px}.spl-footer{font-size:14px}.spl-next,.spl-prev{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}.spl-spinner{background-size:30px 30px}}.hide-scrollbars{overflow:hidden!important}";var e=document.getElementsByTagName("head")[0];function t(i,e,t){i.classList[t?"add":"remove"](e)}function n(i,e,t){t=""+t,i["_s_"+e]!==t&&(i.style.setProperty(e,t),i["_s_"+e]=t)}e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),Object.assign||(Object.assign=function(i,e){for(var t,n=Object.keys(e),o=0;o<n.length;o++)i[t=n[o]]=e[t];return i}),Element.prototype.closest||(Element.prototype.closest=function(i){i=i.substring(1);for(var e=this;e&&1===e.nodeType;){if(e.classList.contains(i))return e;e=e.parentElement}return null});var o=0;function s(i,e){e&&(n(i,"transition","none"),e()),o||(o=i.clientTop&&0),e&&n(i,"transition","")}function a(i,e,t,n){l(!0,i,e,t,n)}function l(i,e,t,n,o){e[(i?"add":"remove")+"EventListener"](t,n,!o&&!1!==o||o)}function r(i,e){i.stopPropagation(),e&&i.preventDefault()}function c(i,e){n(i,"display",e?"":"none")}function u(i,e){n(i,"visibility",e?"":"hidden")}function M(i,e){n(i,"transition",e?"":"none")}var I="theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "),g={page:1,close:1,autofit:1,"zoom-in":1,"zoom-out":1,prev:1,next:1,fullscreen:1},d=document.createElement("div");d.id="spotlight",d.innerHTML="<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>";var p={},m=document.createElement("video");function w(i,e,t,n){if("node"!==n)for(var o,s=Object.keys(t),a=0;a<s.length;a++)if(3<(o=s[a]).length&&0===o.indexOf("src"))if("video"===n){var l=p[o];if(l){if(0<l){var r=t[o];break}}else{if(m.canPlayType("video/"+o.substring(3).replace("-","").toLowerCase())){p[o]=1,r=t[o];break}p[o]=-1}}else if((l=parseInt(o.substring(4),10))&&(l=Math.abs(e-l),!c||l<c)){var c=l;r=t[o]}return r||t.src||t.href||i.src||i.href}var L,y,j,b,D,x,f,h,A,v,N,T,z,C,S,P,Z,Y,H,k,E,B,W,J,O,R,U,G,V,Q,X,F,q,_,K,$,ii,ei,ti,ni,oi,si,ai,li,ri,ci,ui,Mi,Ii,gi,di,pi,mi,wi,Li,yi,ji,bi,Di,xi,fi,hi,Ai={},vi=navigator.connection,Ni=window.devicePixelRatio||1,Ti=document.createElement("img");function zi(){function i(i){return Ai[i]=(d||document).getElementsByClassName("spl-"+i)[0]}if(!ti){ti=document.body,ai=i("scene"),li=i("header"),ri=i("footer"),ci=i("title"),ui=i("description"),Mi=i("button"),Ii=i("prev"),gi=i("next"),pi=i("page"),wi=i("progress"),Li=i("spinner"),oi=[i("pane")],Ci("close",ce),ti[fi="requestFullscreen"]||ti[fi="msRequestFullscreen"]||ti[fi="webkitRequestFullscreen"]||ti[fi="mozRequestFullscreen"]||(fi=""),fi?(hi=fi.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),di=Ci("fullscreen",te)):I.pop(),Ci("autofit",oe),Ci("zoom-in",se),Ci("zoom-out",ae),Ci("theme",ne),mi=Ci("play",Xi),Ci("download",re),a(Ii,"click",Me),a(gi,"click",Ie);var e=i("track");a(e,"mousedown",$i),a(e,"mousemove",ee),a(e,"mouseleave",ie),a(e,"mouseup",ie),a(e,"touchstart",$i,{passive:!1}),a(e,"touchmove",ee,{passive:!0}),a(e,"touchend",ie),a(Mi,"click",(function(){F?F(S,Y):X&&(location.href=X)}))}}function Ci(i,e){var t=document.createElement("div");return t.className="spl-"+i,a(t,"click",e),li.appendChild(t),Ai[i]=t}function Si(i){if(P=Z.length){ti||zi(),W&&W(i);for(var e=oi[0],o=e.parentNode,s=oi.length;s<P;s++){var a=e.cloneNode(!1);n(a,"left",100*s+"%"),o.appendChild(a),oi[s]=a}ni||(ti.appendChild(d),Bi()),S=i||1,M(ai),de(!0),fi&&c(di,0<screen.availHeight-window.innerHeight),history.pushState({spl:1},""),history.pushState({spl:2},""),M(d,!0),t(ti,"hide-scrollbars",!0),t(d,"show",!0),Ui(!0),Bi(),qi(),G&&Xi(!0,!0)}}function Pi(i,e){return void 0!==(i=Y[i])?"false"!==(i=""+i)&&(i||e):e}function Zi(i){i?s(si,Zi):(M(ai,ii),n(si,"opacity",$?0:1),Ji(K&&.8),ei&&t(si,ei,!0))}function Yi(i){if(ni=oi[i-1],si=ni.firstChild,S=i,si)z&&oe(),R&&t(si,R,!0),Zi(!0),ei&&t(si,ei),$&&n(si,"opacity",1),K&&n(si,"transform",""),n(si,"visibility","visible"),ji&&(Ti.src=ji),G&&Fi(bi);else{var e=yi.media,o=Pi("spinner",!0);if("video"===e)Hi(o,!0),(si=document.createElement("video")).onloadedmetadata=function(){si===this&&(si.onerror=null,si.width=si.videoWidth,si.height=si.videoHeight,Wi(),Hi(o),Yi(i))},si.poster=Y.poster,si.preload=Q?"auto":"metadata",si.controls=Pi("controls",!0),si.autoplay=Y.autoplay,si.h=Pi("inline"),si.muted=Pi("muted"),si.src=yi.src,ni.appendChild(si);else{if("node"===e)return"string"==typeof(si=yi.src)&&(si=document.querySelector(si)),void(si&&(si.g||(si.g=si.parentNode),Wi(),ni.appendChild(si),Yi(i)));Hi(o,!0),(si=document.createElement("img")).onload=function(){si===this&&(si.onerror=null,Hi(o),Yi(i),Wi())},si.src=yi.src,ni.appendChild(si)}si&&(o||n(si,"visibility","visible"),si.onerror=function(){si===this&&(ue(si),t(Li,"error",!0),Hi(o))})}}function Hi(i,e){i&&t(Li,"spin",e)}function ki(){return document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function Ei(){if(Bi(),si&&Wi(),fi){var i=ki();t(di,"on",i),i||c(di,0<screen.availHeight-window.innerHeight)}}function Bi(){D=d.clientWidth,x=d.clientHeight}function Wi(){f=si.clientWidth,h=si.clientHeight}function Ji(i){n(si,"transform","translate(-50%, -50%) scale("+(i||A)+")")}function Oi(i,e){n(ni,"transform",i||e?"translate("+i+"px, "+e+"px)":"")}function Ri(i,e,t){e?s(ai,(function(){Ri(i,!1,t)})):n(ai,"transform","translateX("+(100*-i+(t||0))+"%)")}function Ui(i){l(i,window,"keydown",Vi),l(i,window,"wheel",Qi),l(i,window,"resize",Ei),l(i,window,"popstate",Gi)}function Gi(i){ni&&i.state.spl&&ce(!0)}function Vi(i){if(ni){var e=!1!==Y["zoom-in"];switch(i.keyCode){case 8:e&&oe();break;case 27:ce();break;case 32:G&&Xi();break;case 37:Me();break;case 39:Ie();break;case 38:case 107:case 187:e&&se();break;case 40:case 109:case 189:e&&ae()}}}function Qi(i){ni&&!1!==Y["zoom-in"]&&(0>.5*(0>(i=i.deltaY)?1:i?-1:0)?ae():se())}function Xi(i,e){("boolean"==typeof i?i:!bi)===!bi&&(bi=bi?clearTimeout(bi):1,t(mi,"on",bi),e||Fi(bi))}function Fi(i){B&&(s(wi,(function(){n(wi,"transition-duration",""),n(wi,"transform","")})),i&&(n(wi,"transition-duration",_+"s"),n(wi,"transform","translateX(0)"))),i&&(bi=setTimeout(Ie,1e3*_))}function qi(){U&&(xi=Date.now()+2950,Di||(t(d,"menu",!0),_i(3e3)))}function _i(i){Di=setTimeout((function(){var i=Date.now();i>=xi?(t(d,"menu"),Di=0):_i(xi-i)}),i)}function Ki(i){"boolean"==typeof i&&(Di=i?Di:0),Di?(Di=clearTimeout(Di),t(d,"menu")):qi()}function $i(i){r(i,!0),v=!0,N=!1;var e=i.touches;e&&(e=e[0])&&(i=e),T=f*A<=D,j=i.pageX,b=i.pageY,M(ni)}function ie(i){if(r(i),v){if(N){if(T&&N){var e=(i=L<-D/7&&(S<P||E))||L>D/7&&(1<S||E);(i||e)&&(Ri(S-1,!0,L/D*100),i&&Ie()||e&&Me()),L=0,Oi()}M(ni,!0)}else Ki();v=!1}}function ee(i){if(r(i),v){var e=i.touches;e&&(e=e[0])&&(i=e),e=(f*A-D)/2,L-=j-(j=i.pageX),T||(L>e?L=e:L<-e&&(L=-e),h*A>x&&(e=(h*A-x)/2,(y-=b-(b=i.pageY))>e?y=e:y<-e&&(y=-e))),N=!0,Oi(L,y)}else qi()}function te(i){var e=ki();"boolean"==typeof i&&i===!!e||(e?document[hi]():d[fi]())}function ne(i){"string"!=typeof i&&(i=C?"":V||"white"),C!==i&&(C&&t(d,C),i&&t(d,i,!0),C=i)}function oe(i){"boolean"==typeof i&&(z=!i),t(si,"autofit",z=1===A&&!z),n(si,"transform",""),A=1,y=L=0,Wi(),M(ni),Oi()}function se(){var i=A/.65;50>=i&&(z&&oe(),Oi(L/=.65,y/=.65),le(i))}function ae(){var i=.65*A;z&&oe(),1<=i&&(1===i?L=y=0:(L*=.65,y*=.65),Oi(L,y),le(i))}function le(i){A=i||1,Ji()}function re(){var i=ti,e=document.createElement("a"),t=si.src;e.href=t,e.download=t.substring(t.lastIndexOf("/")+1),i.appendChild(e),e.click(),i.removeChild(e)}function ce(i){setTimeout((function(){ti.removeChild(d),ni=si=yi=Y=k=Z=W=J=O=F=null}),200),t(ti,"hide-scrollbars"),t(d,"show"),te(!1),Ui(),history.go(!0===i?-1:-2),ji&&(Ti.src=""),bi&&Xi(),si&&ue(si),Di&&(Di=clearTimeout(Di)),C&&ne(),q&&t(d,q),O&&O()}function ue(i){if(i.g)i.g.appendChild(i),i.g=null;else{var e=i.parentNode;e&&e.removeChild(i),i.src=i.onerror=""}}function Me(i){if(i&&qi(),1<P){if(1<S)return ge(S-1);if(E)return Ri(P,!0),ge(P)}}function Ie(i){if(i&&qi(),1<P){if(S<P)return ge(S+1);if(E)return Ri(-1,!0),ge(1);bi&&Xi()}}function ge(i){if(i!==S){bi?(clearTimeout(bi),Fi()):qi();var e=i>S;return S=i,de(e),!0}}function de(i){if(y=L=0,A=1,si)if(si.onerror)ue(si);else{var e=si;setTimeout((function(){e&&si!==e&&(ue(e),e=null)}),650),Zi(),Oi()}!function(i){var e,n=Z[S-1],o=n;if(Y={},k&&Object.assign(Y,k),Object.assign(Y,o.dataset||o),H=Y.media,F=Y.onclick,V=Y.theme,q=Y.class,U=Pi("autohide",!0),E=Pi("infinite"),B=Pi("progress",!0),G=Pi("autoslide"),Q=Pi("preload",!0),X=Y.buttonHref,_=G&&parseFloat(G)||7,C||V&&ne(V),q&&t(d,q,!0),q&&s(d),o=Y.control){o="string"==typeof o?o.split(","):o;for(var a=0;a<I.length;a++)Y[I[a]]=!1;for(a=0;a<o.length;a++){var l=o[a].trim();"zoom"===l?Y["zoom-in"]=Y["zoom-out"]=!0:Y[l]=!0}}if(o=Y.animation,K=$=ii=!o,ei=!1,o)for(o="string"==typeof o?o.split(","):o,a=0;a<o.length;a++)"scale"===(l=o[a].trim())?K=!0:"fade"===l?$=!0:"slide"===l?ii=!0:l&&(ei=l);for(R=Y.fit,a=vi&&vi.downlink,o=Math.max(x,D)*Ni,a&&1200*a<o&&(o=1200*a),yi={media:H,src:w(n,o,Y,H),title:Pi("title",n.alt||n.title||(e=n.firstElementChild)&&(e.alt||e.title))},ji&&(Ti.src=ji=""),Q&&i&&(n=Z[S])&&((e=(i=n.dataset||n).media)&&"image"!==e||(ji=w(n,o,i,e))),n=0;n<I.length;n++)i=I[n],c(Ai[i],Pi(i,g[i]))}(i),Ri(S-1),t(Li,"error"),Yi(S),M(ni),Oi(),i=yi.title;var o=Pi("description"),a=Pi("button"),l=i||o||a;l&&(i&&(ci.firstChild.nodeValue=i),o&&(ui.firstChild.nodeValue=o),a&&(Mi.firstChild.nodeValue=a),c(ci,i),c(ui,o),c(Mi,a),n(ri,"transform","all"===U?"":"none")),U||t(d,"menu",!0),u(ri,l),u(Ii,E||1<S),u(gi,E||S<P),pi.firstChild.nodeValue=1<P?S+" / "+P:"",J&&J(S,Y)}a(document,"click",(function(i){var e=i.target.closest(".spotlight");if(e){r(i,!0),i=e.closest(".spotlight-group"),Z=(i||document).getElementsByClassName("spotlight");for(var t=0;t<Z.length;t++)if(Z[t]===e){k=i&&i.dataset,Si(t+1);break}}})),window.Spotlight={init:zi,theme:ne,fullscreen:te,download:re,autofit:oe,next:Ie,prev:Me,goto:ge,close:ce,zoom:le,menu:Ki,show:function(i,e,t){Z=i,e&&(k=e,W=e.onshow,J=e.onchange,O=e.onclose,t=t||e.index),Si(t)},play:Xi,addControl:Ci,removeControl:function(i){var e=Ai[i];e&&(li.removeChild(e),Ai[i]=null)}}}).call(this)}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return i[n].call(s.exports,s,s.exports,t),s.exports}t(9704)})();