const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348134237510";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_31_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjExLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNixcbiAgICAgICAgMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUkgrTVFCR2ZKbzJ2elc2YzNDRXh3UTJnMGlFT2RDNng5dzVpYnRiemlTVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOEppLW1XTTJTaEdMbHRwYkFMSGxNd1wiLFxuICBcInBob25lSWRcIjogXCIzZjlkODIyNy03YjY1LTQ4OWMtOGM5YS1lMTUxMGM0OThkZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTIxLFxuICAgICAgMTg3LFxuICAgICAgOTIsXG4gICAgICA5OCxcbiAgICAgIDE0OSxcbiAgICAgIDE3LFxuICAgICAgNjMsXG4gICAgICA3MixcbiAgICAgIDIyNSxcbiAgICAgIDgsXG4gICAgICAyLFxuICAgICAgMjQ4LFxuICAgICAgMTE1LFxuICAgICAgNzAsXG4gICAgICAxNixcbiAgICAgIDIwNyxcbiAgICAgIDE0MSxcbiAgICAgIDIzMyxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDExMixcbiAgICAgIDkwLFxuICAgICAgMTMzLFxuICAgICAgNyxcbiAgICAgIDEzLFxuICAgICAgMTQsXG4gICAgICAyNDksXG4gICAgICAyMjEsXG4gICAgICAxMSxcbiAgICAgIDQzLFxuICAgICAgMjEzLFxuICAgICAgNDYsXG4gICAgICAyNixcbiAgICAgIDIxMCxcbiAgICAgIDE4OSxcbiAgICAgIDEzNCxcbiAgICAgIDE1NSxcbiAgICAgIDE4NyxcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWNk41S1I5R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNDIzNzUxMDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFNRUVSQSdTIEtJVENIRU4gQU5EIE1PUkVcIixcbiAgICBcImxpZFwiOiBcIjIwMzQ0ODYyNDYxOTcwNDoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOKzB2TEVDRU1QMnpMc0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJPQnFaT29vZHJ0YjJMSGNzQ0FWS1FjbXgvWkNRb0J3YlhJQm85Zit3aWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib3VTcEFOdnVRVkRlV0Yvd0pZVlNSS3RRK2pIVjVrTWJZSkZSZUI4MHgxcEQ1ekVjQlFYVDVrQTQ4em1wNWFiejR4OU1ORWpMdUdweXFlcTNPTmRYQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQUFDa2VQcTYvMnFqendyT3lsRnphVkkwNE9TMGcwMHMyTHVUMS8vQmJpV1BQbkNjSjBKTHlKWjZzUzhqbm02ZjFsYktXY2ZIUTBQRnpEWGhSQzZraVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNDIzNzUxMDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NjA1MDYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVhOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWE4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwRk11UnFFNVpDdEtoRWg5Sm41cVFJemNvT0YrY1k0MHFNS1NoUVVCZEtrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY0MDYyMTE1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0ODE5MTQyMzA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
