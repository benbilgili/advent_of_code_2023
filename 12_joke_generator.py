# Christmas cracker joke generator - Because he "ho ho hos"

import random

jokes = [
    ["What is green, covered in Christmas lights and Christmas bulbs, and goes ribbit?", "A mistle-toad"],
    ["How do sheep say Merry Christmas to each other?", "Fleece Navidad"],
    ["What is every parent's favorite Christmas song?", "Silent Night!"],
    ["Why did Rudolph have to attend summer school?", "Because he went down in history."],
    ["How did Joseph and Mary weigh baby Jesus at birth?", "They had a weigh in the manger."],
    ["Why does Scrooge love Rudolph the Red-Nosed Reindeer?", "Because every buck is dear to him!"],
    ["What did Adam say on the day before Christmas?", "It's Christmas, Eve!"],
    ["Why did the scarecrow get a big Christmas bonus?", "Because he was outstanding in his field."],
    ["What did the bald man say when he got a comb for Christmas?", "I’ll never part with it!"],
    ["What is a vegan’s favorite Christmas carol?", "Soy to the World."],
    ["Elves use what kind of money?", "Jingle bills."],
    ["What happened to the man who stole an Advent Calendar?", "He got 25 days!"],
    ["What do they sing at a snowman’s birthday party?", "Freeze a jolly good fellow!"],
    ["What did the wise men say after they offered up their gifts of gold and frankincense?", "Wait, there's myrrh."],
    ["What do you get when you cross a snowman with a vampire?", "Frostbite."],
    ["What does Santa suffer from if he gets stuck in a chimney?", "Claus-trophobia!"],
    ["What do you call Santa when he stops moving?", "Santa Pause."],
    ["What do snowmen eat for dessert?", "Ice crispies."],
    ["How do you help someone who has lost their Christmas spirit?", "Nurse them back to elf."],
    ["What do you call an elf that runs away from Santa's workshop?", "A rebel without a Claus!"],
    ["What do you call a reindeer ghost?", "Cari-boo!"],
    ["What is it called when a snowman has a temper tantrum?", "A meltdown."],
    ["Why are elves such great motivational speakers?", "They have plenty of elf-confidence."],
    ["Why do reindeer like Beyoncé so much?", "She sleighs."]
]

def generate_joke():
    random_number = random.randint(0, 23)
    input(jokes[random_number][0])
    print(jokes[random_number][1])

generate_joke()



