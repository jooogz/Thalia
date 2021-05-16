fetch = require('node-fetch')
module.exports = {
    getRandomAdvice: async function () {
        const data = await fetch("http://api.adviceslip.com/advice")
        const res = await data.json()
        const advice = res.slip.advice
        return advice
    },
    magicEightBall: function () {
        const eightBall = ["It is Certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful",
        ];
        const pick = eightBall[Math.floor(Math.random() * eightBall.length)];
        return pick
    },
    djKhaled : function() {
        const key = ["It’s going to work out, stay positive.",
            "Bless up. Don’t play yourself.",       
            "The key to more success is coco butter.",
            "They never said winning was easy.",
            "Working all winter shining all summer.",
            "Always have faith. Always have hope.",
            "To keep the business going, you gotta keep it boomin’.",
            "The key is: never fold.",
            "Always have faith. Always have hope.",
            "The key is to make it.",
            "They don’t want you to win.",
            "You smart! You loyal! You’re a genius!",
            "Be a star. Be a Superstar.",
            "All I do is WIN, WIN, WIN no matter what.",
            "They’ll try to close the door on you… Just open it.",
            "Give thanks to the most high.",
            "There will be road blocks but we will overcome it.",
            "Those that weather the storm r the great ones.",
            "I remember when I ain’t have a jacuzzi.",
            'Key to more success is clean heart and clean face.',
            'I can deal with everything. I got the answer for anything.',
            'The key is to be honest. Be honest, but don’t play yourself.',
            'I’m not ashamed to say I fear something.',
            'Hate is a waste of emotion, tell em to jump in the ocean.',
            'We have to get money. We have no choice. It cost money to eat.',
            'You want my advice? Don’t play yourself.',
            'When I say “major key,” I think being grateful is actually respecting yourself.',
            'You can never run out of keys.',
            'I can move any crowd.',
            'The key is to enjoy life, because they don’t want you to enjoy life.',
            'To succeed, you must believe. When you believe, you will succeed.',
            'Look at the sunset. Life is amazing. Life is beautiful. Life is what you make it.',
            'They don’t want you to jet ski.',
            'In life everyone has a choice. The key is: make a right choice.',
            'Love is the most powerful thing in the world, and you know, what love brings is joy.',
            'My fans expect me to be great and keep being great.',
            'They kick you when you’re down, but they wanna kick it when you’re up.',
            'I’ve been a mogul and executive since the beginning of my career. People are just born with that skill.',
            'The key is never be afraid of being yourself. Never!',
            'I wake up everyday inspiring myself. Because God gave me life.',
            'Love to everybody who is out there progressing and taking things to the next level.',
            'The key is to vote because we need a vote to put the people in power that we want to represent us.',
            'gotta water your plants. Nobody can water them for you.',
            "I’m the king of the anthems.",      
            "Winning, to me, is easy. Winning more is the challenge.",
            "Life is amazing, always give thanks no matter what.", 
            "Walk with me through the pathway to more success.", 
            "I love stuff from the Holy Land. It makes me feel blessed.", 
            "We gonna win more. We gonna live more. We the best.", 
            "Keep all jealous people away from you.", 
            "The other day the grass was brown, now its green cuz I ain’t give up. Never surrender.", 
            "I’m all about peace. I’m all about unity. I’m all about love.", 
            "Keep people around you that’s going to up lift you.", 
            "When you stop making excuses and you work hard and go hard you will be very successful.", 
            "Some of the guys when they play, they try to keep it reality. Nah, I need the best everything.", 
            "We can take a ‘It was hard to get there.’ But we ain’t taking no loss. We’re going to win.", 
            "Stay focused and secure your bag, because they want you to fail and they don’t want us to win.", 
            "Before I went into the studio with Jay Z, Jigga, Hov, I wanted to go to the Marcy Projects in Brooklyn and touch the people and touch the culture.", 
            "I feel like people can relate to me because we all go through wins and roadblocks and passion and pain, and it’s a vibe.", 
            "Fan Luv is a powerful positive movement. All over the world they come. It’s a force of luv.", 
            "When I wake up, I immediately pray. When I go to sleep, I pray. Honestly, a prayer every second, in every breath. I suggest the whole world to do it. Prayer is amazing.", 
            "My whole life and my whole career, even through my music, I tell people: let’s unify; let’s show more love.", 
            "Once you start losing reality, when you start losing reality with yourself, sometimes people just get dizzy.", 
            "They don’t want you to win. They don’t want you to have the No. 1 record in the country. They don’t want you get healthy. They don’t want you to exercise. And they don’t want you to have that view.", 
            "I know that I’ve been put on this Earth to make people happy, to inspire people, and to uplift people. That’s a beautiful thing.", 
            "At the end of the day, I understand that life has road blocks, and life is like school – you’ll be tested; we gotta pass it.", 
            "We want justice, but at the same time, we gotta love and come together and bring unity, and I feel it’s gonna happen.", 
            "I stayed focused, and I never surrendered, and now I’ve been blessed. now I take care of my mother, my father, and my entire whole family.", 
            "For me to talk with Obama and the conversation I had with him, I was letting him know that me and my fans have a special connection, and it’s love, and I believe that love is the answer.", 
            "You do know it cost money to put a t-shirt on your back? You do know it cost money to have a house? You do know it cost money to eat? Get money, don’t let these people fool you.", 
            "I didn’t want to be an artist in the same place I worked. You could always have people that might feel like you would do something more for yourself.", 
            "I always wanted to have a headphone line but I feel like I’m going to do more than just headphones eventually, but we want to wake the world up right now with this.", 
            "I put out tapes, but I always kept saying, ‘Why am I putting all this energy into these tapes?’ I was like, ‘I’d rather make just an album because I have a vision; I know how I want to do my records.’ I always felt like an artist as well.", 
            "If you think of something negative and you keep it in your head, you are going to actually live that. Now, if you think of something great and positive and joyful, you’re going to actually live that. You’ve got to be careful what you put in your head. Basically, I’ll call that: “Don’t ever play yourself.", 
            "Watch your back, but more importantly when you get out the shower, dry your back. It’s a cold world out there.", 
            "The new Khaled is enjoying life, man. Because you know what, nobody is going to congratulate you on what you really deserve.", 
            "Them doors that was always closed, I ripped the doors off, took the hinges off. And when I took the hinges off, I put the hinges on the f**kboys’ hands.", 
            "Basically, I’m one of the greatest producers ever. And I’m also one of the greatest DJs ever. And I’m also one of the best executives ever.", 
            "I’m one of them guys that tries to make everything the best of the best, so sometimes I’m out of control with it.", 
            "We go hard. In everything we do we’re going to accomplish our victory and our goal. If it takes a day, a year, or 20 years, we’re going to win. I haven’t taken a loss because everything I’ve done has been a working process to win. From being a kid on them turntables to becoming where I am is not a loss. It’s a blessing.",
            "That’s what we provide you know what I’m saying. When you get DJ Khaled you sound bites. You get documentaries. My interviews will play ten years from now. I ain’t regular like these other people. This is DJ Khaled, this is special cloth alert.", 
            "When I turn in my list, obviously every record was important to me. I didn’t just put records on there to put records on there. I was excited that “All I Do Is Win” could go on there because you hear it at the end of the game and that represents victory. That’s undeniable. You can’t hate on that, it’s impossible.",
            "Sometimes, you might meet somebody that you love that’s turning into a ‘they.’ My key is invite them to Miami and take them to the ocean and let them jump off the boat in the ocean, on the sand bar, and cleanse off and pray and then go take a shower, and hopefully the ‘they’ is out of you.",
            "I put together amazing records, whether that’s finding the beat or putting the right hook on there, and picking the right artists on the record. That’s me being an A&R. And I’m making sure that they give me their best.",
            "God has blessed me because I think. No I know that i’ve been put on this Earth to make people happy, to inspire people and to uplift people. That’s a beautiful thing. But the only downfall about it is that I really don’t have nobody to do that for me. But it makes me super strong because I do know that if I’m having a bad day, I can come up here and make Ebro and y’all laugh and smile."
            ]
      const pick = key[Math.floor(Math.random() * key.length)];
      return pick
    },
    punJoke : async function(){
        const data = await fetch('https://v2.jokeapi.dev/joke/Pun')
        const res = await data.json() 
        const joke = res.setup + '\n' + res.delivery
        return joke
    },
    darkJoke : async function(){
        const data = await fetch('https://v2.jokeapi.dev/joke/Dark')
        const res = await data.json()
        const joke  = res.setup + '\n' + res.delivery
        return joke 
    }
}