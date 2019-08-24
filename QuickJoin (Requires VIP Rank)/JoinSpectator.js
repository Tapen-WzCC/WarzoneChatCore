register("chat", function(event) {
    ChatLib.say("/join spectator");
}).setCriteria("JSpec").setParameter("contains");
