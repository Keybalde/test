const { Client, Collection, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");
const ayarlar = require("./ayarlar.json");
const express = require('express');



const codare = new Client({
    intents: 32767
});





codare.commands = new Collection();
codare.slash_commands = new Collection();
codare.aliases = new Collection();
codare.events = new Collection();
codare.categories = fs.readdirSync("./komutlar");


module.exports = codare;
if(!codare) return


["prefix", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(codare);
});


process.on('unhandledRejection', err => {
    console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
    console.log(err);
});


const AUTH = process.env.TOKEN || ayarlar.codare.TOKEN;
if (!AUTH) {
    console.warn("[WARN] Lütfen tokeninizin doğru oldugundan emin olunuz!").then(async () => process.exit(1));
} else {
    codare.login(AUTH).catch(() => console.log("[WARN] Token geçersiz gibi görünüyor, lütfen tekrar kontrol edin. Bu hata hala gösteriliyorsa, 3 İntenti etkinleştirin."));
}