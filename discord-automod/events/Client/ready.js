const codare = require("../../index.js");
const ayarlar = require("../../ayarlar.json");
const ms = require("ms");

codare.once('ready', async () => {
 // console.log(`[GİRİŞ BAŞARILI] ${codare.user.tag} adiyla giris yapildi ${codare.guilds.cache.size} sunucuda ${codare.users.cache.size} Kullaniciya hizmet veriyor.`);

  console.log ('_________________________________________');
  console.log (`Kullanıcı İsmi     : ${codare.user.username}`);
  console.log (`Sunucular          : ${codare.guilds.cache.size}`);
  console.log (`Kullanıcılar       : ${codare.users.cache.size}`);
  console.log (`Prefix             : ${ayarlar.prefix}`);
  console.log (`Durum              : Bot Çevrimiçi!`);
  console.log ('_________________________________________');



  codare.user.setActivity(`${ayarlar.prefix}automod`)
});