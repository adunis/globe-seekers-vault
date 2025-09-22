

~~~ds-ab
name: 'Montage: Escape from the Iron Keep'
type: Extended Action
flavor: "With the spy in tow, every shadow is a threat and every sound a warning. Freedom is close, but the keep's walls have one last, deadly price."
effects:
  - name: Goal & Parameters
    effect: |
      **Goal:** Escape the keep with the spy.
      This is a **Moderate** montage, requiring **5 Successes** before **3 Failures** are accumulated. The montage lasts for **2 rounds**.

  - name: Potential Challenges
    effect: |
      On their turn, a character can attempt one of the following challenges.
      - **Scale the Outer Wall:** Climb a treacherous section of the keep's wall. (Athletics + Agility, Easy)
      - **Bypass the Sentry Post:** Sneak past a tower with distracted guards. (Stealth + Intuition, Easy)
      - **Disable Courtyard Traps:** Identify and disarm pressure plates and tripwires. (Thievery + Reason, Hard)
      - **Create a Diversion:** Cause a commotion on the other side of the keep to draw patrols away. (Deception + Presence, Medium)
      - **Navigate Secret Tunnels:** Find and navigate a hidden, crumbling passage. (Survival + Intuition, Medium)
      - **Calm the Spy's Nerves:** Keep the anxious spy from panicking and giving you away. (Persuasion + Presence, Easy)
      - **Forge a Hall Pass:** Create a believable document to move through a checkpoint. (Subterfuge + Reason, Hard)

  - name: Player Turn Actions
    effect: |
      On their turn, a character can either **Take an Action** against a challenge from the list above or **Assist** an ally.
      - **Action**: Make a skill test as described in the challenge.
      - **Assist**: Make a roll with a different but relevant skill; any bonus applies to the character they assist.

  - name: Total Success
    effect: The party and the spy escape the keep without incident, disappearing into the night.

  - name: Partial Success
    effect: |
      The time limit (2 rounds) is reached with at least two more successes than failures. 
      The party escapes, but with complications (e.g., an alarm is raised, a chase begins, the spy is injured).

  - name: Total Failure
    effect: |
      The failure limit is reached, or the time limit expires without enough successes.
      The party is discovered, leading to a direct confrontation or capture.
~~~



```ds-counter
max_value: 5
current_value: 0
min_value: 0
name: Successes
value_height: 3
name_height: 1
```

```ds-counter
max_value: 3
current_value: 0
min_value: 0
name: Failures
value_height: 3
name_height: 1
```

```ds-counter
max_value: 2
current_value: 0
min_value: 0
name: Round
value_height: 3
name_height: 1
```


Montage Tests
When a group of heroes works together over time to accomplish
a common goal that requires more than a single characteristic, the
Director can call for a montage test. Such tests typically take place
over a prolonged period and focus on collective or shared activities.
Navigating a vast desert, convincing farmers to rise up against a
tyrannical leader, and performing a ritual to open a magically sealed
gate can all be accomplished with montage tests.
In a montage test, the players take turns making tests as their
characters tackle a task together in a montage test round. Each hero has
a chance to make a test (or to assist another hero’s test; see Assist a Test
above) intended to influence the outcome of the task.
A hero can also spend their turn using an item, ability, or other
option they have available that they believe can help in the montage
test. For example, if a group of heroes want to cross an ocean on a
sailing ship before a storm begins, one hero might make use of a
magic fan that creates wind to keep the sails full day and night. The
Director decides that this clever action gives the heroes 2 automatic
successes in the montage test, with no individual tests necessary (see
Total Successes and Failures below).
Once a hero makes a test, assists with a test, or uses an ability or
other option, they can’t do anything else as part of the montage test
until each other hero involved in the montage test does so as well. A
hero can also choose to do nothing, most often if they have no one to
assist and fear that their actions might make the situation worse (see
Montage Test Outcomes below). Once every hero has had a chance to
act, the montage test round ends and a new one begins.
Time and Stakes
As the name suggests, montage tests create a kind of cinematic
montage in the action of the game. A montage test can take place over
the course of several hours or days, with each individual test or other
activity set up as a brief vignette within the montage that stars one of
the heroes. Combat encounters, negotiations, and other challenges and
scenes can break up a montage test (see Sample Montage Test below).
The Director should deploy montage tests only when the players are
engaged in overcoming a goal that has stakes for the story and some
sort of pressure, such as a looming deadline or impending harm. A
montage test is great for a race to get to another location before an
enemy army does, a chase to escape or catch up to a foe, weathering
a hazard, preparing a village for war, or similar activities. Low- or
no-stakes activities such as travel through a forest with no time
pressure, or training during a respite to use a new kit, can be narrated in
montage style, but they don’t require a montage test.
Director Sets the Scene
At the start of a montage test, the Director should describe the scenario
underlying the task at hand, and the various challenges the heroes
might face as they attempt to collectively accomplish it. For example, if
the heroes are chasing down a pickpocket through a crowded market,
the Director might talk about the throngs of innocent people blocking
the way forward, obscuring the characters’ vision, and making noise
that complicates attempts to hear the thief’s nimble footsteps. There
are also traveling carts to dodge, the speed and dexterity of the pursued
character to contend with, and a pack of stray dogs who chase after
anyone who sprints through the market. Describing these obstacles
gives the heroes ideas about what they’re trying to overcome as they
attempt to achieve their goals.
Individual Tests in Montage Tests
The difficulty of each individual test in a montage test is set by the
Director and can vary from test to test. For instance, if the heroes are
preparing the defenses of a village threatened by a band of approaching
raiders, the Director might decide that a character who wants to dig a
trench around the village needs to make an easy Might test. Another
hero wants to train the untested farmers of the village in the ways of
war, and the Director decides this is a hard Reason test.
The same rules and guidelines that apply to all individual tests apply
in montage tests. If a hero has a clever, out-of-the-box idea that the
Director thinks should automatically succeed without rolling dice, it
does. If the circumstances of the test should grant an edge or a bane,
they do. Individual test outcomes shouldn’t halt the story.
The Director should couch each success or failure as it relates to the
overall goal of the montage test. If the heroes are trying to reach an
ancient temple, failing a Might test to ford a river in their path doesn’t
mean they don’t cross the river and are stuck on the other side. But it
could mean that failing to cross the river in a timely manner gives a
rival group of villains the chance to beat the party to the temple.
The rewards and consequences of individual tests made during a
montage test are handled on an individual basis. The Director can use
the default of gaining additional Malice in the next combat encounter
for consequences and having the party gain hero tokens for rewards to
keep the montage moving.
Can’t Use the Same Skill Twice
An individual character can’t use the same skill more than once in a
montage test. Though multiple heroes can use the same skill, a test or
an assist with a specific skill represents each characters’ entire contri-
bution to the montage test with that skill. At the Director’s discretion,
this restriction can be lifted for prolonged montage tests, or for montage
tests that are limited in scope and have only a small number of skills
that apply to them.
New Challenges for Each Test
In general, when a hero makes a test as part of a montage test, they
should choose new obstacles to overcome that haven’t already been
overcome as part of the test. If the heroes are chasing a thief through
the marketplace and one of them has already distracted the pack of
stray dogs with a deft hand and a piece of meat, additional tests made to
distract the animals don’t count toward the outcome of the montage test.
When it fits the scenario, the Director can adjust this restriction. If part
of a montage test involves searching for people trapped in a burning
building, the Director is likely to allow multiple tests to fight or avoid the
fire, since this will happen throughout the montage test, not just once.
Introducing More Challenges
During a montage test, a Director can introduce new challenges for
the heroes to face. While attempting to run out of a burning building
from the top floor, the characters might discover that by the time they
reach the second floor, beams are starting to fall and glass windows are
exploding as the structure starts to collapse. These new challenges can
be incorporated into the tests the heroes subsequently make.
Draw Steel262
Total Success
If the heroes earn a total success, they achieve what they set out to do
without complication. For instance, if the heroes engaged in a montage
test to cross a desert and reach a city before a tyrant’s army arrives there
and levels the place, a total success sees them arrive at the city gates
with plenty of time to warn people of the impending assault.
The heroes earn 1 Victory when they achieve total success on an easy
or moderate montage test, and 2 Victories on a hard montage test.
Partial Success
If the heroes earn a partial success, they succeed at what they set out
to do, but there is a complication or a cost involved. For instance, when
crossing the desert to reach and warn the city of the tyrant’s army,
a mixed success sees the characters arrive at the city gates with the
enemy forces just behind them. Alternatively, the Director might allow
the heroes to arrive well before the army, but they don’t cover their
movements well enough. The tyrant realizes the city has been warned
and decides to call in a favor to have a powerful dragon join the siege.
The heroes earn 1 Victory when they achieve partial success on a hard
or moderate montage test.
Total Failure
If the heroes suffer total failure, they don’t achieve what they set out
to do. Just as with standard tests, failure on a group test shouldn’t bring
a story to a halt. Total failure should make things more interesting and
challenging! With a total failure in a montage test to cross the desert
and warn the city, the characters arrive at the city to find it already
under siege by the tyrant.
Sample Montage Test
Four heroes must cross the vast and inhospitable Infinite Desert
to warn the city of Ahset that the tyrannical Empress Vardo is
coming to conquer them. If the characters arrive in time, they can
organize the defenses of the city, giving its people a greater chance of
defeating the tyrant.
The Director determines that crossing the desert is a montage test of
hard difficulty. With four heroes involved, the success limit is 6 and the
failure limit is 2 as the montage test begins.
Montage Test Round 1
When the test begins, the Director sets the scene. They tell the players
that the desert has extreme temperatures, sudden sandstorms, high
dunes to cross, deep sand, chasms, and quicksand lakes. The Director
decides that the challenges of dunes, deep sand, and quicksand can be
tackled multiple times in the test, since the Infinite Desert is filled with
these hazards.
Urdoncara, a fury, starts things off by asking to make an Intuition test
using the Nature skill to predict the best times of day to travel and
rest. She wants the party to avoid the worst of the desert’s extreme
temperatures and any sandstorms or other weather phenomena, so
that the journey is quickened. The Director decides this is an easy test.
Urdoncara makes the test and gets a total of 12, earning 1 success for
the montage test.
Jorn, a tactician, wants to make a Reason test using the Climb skill to
lead the party over dunes and other hazards with minimal effort. The
Director allows the attempt, but says that knowing what makes one
dune easier to climb than another is tricky, setting the difficulty at
hard. Jorn gets a 9 on the test and fails with a consequence, which the
Director decides will cause him to take a bane on his next power roll
due to the exertion. The montage test has 1 success and 1 failure.
Total Successes and Failures
The Director or another player will track the total number of successes
and failures the heroes earn during a montage test. Every montage test
has a success limit and a failure limit. When the number of successful
tests equals the success limit, the montage test ends and the heroes
achieve total success (seeMontage Test Outcomes below). The montage
test can also end when the number of failed tests equals the failure
limit, and the heroes suffer total failure.
Limited Rounds
A montage test should last only 2 montage test rounds. If the heroes
don’t end the montage test by achieving the success limit or failure
limit, the montage test ends when the second montage test round is
over. This time limit helps to keep a montage test from becoming a
slog, and prevents heroes from simply using their turns to assist the
one hero with the best chance of success. This can inspire each hero to
be a more active participant in the montage test. That said, the Director
can increase the number of rounds a montage test lasts if they wish to
create a particularly grueling challenge.
Montage Test Difficulty
The Director determines the success limit and failure limit of a montage
test. They can share this information or keep it secret, depending on
what feels the most fun and dramatic for the situation and the players.
In general, the higher the success limit, the harder and more
complicated it is for the heroes to overcome the montage test, since a
hero can’t make the same test twice. The Montage Test Difficulty table
gives a recommended success limit and failure limit for easy, moderate,
and hard montage tests for groups with five heroes.
Montage Test Difficulty
Difficulty Success Limit Failure Limit
Easy 5 5
Moderate 6 4
Hard 7 3
For larger or smaller groups, the Director can make the following
adjustments to keep montage tests achievable but challenging:
¥ For four or fewer heroes, decrease the success limit and failure limits
by 1 (to a minimum of 2) for every hero fewer than five. For example,
if a group has only three heroes, an easy montage test has a success
limit and failure limit of 3.
¥ For six or more heroes, increase the success and failure limits by 1 for
every hero more than five.
Montage Test Outcomes
A montage test can have three different outcomes:
¥ If the heroes hit the success limit before hitting the failure limit or
before the time runs out for the test, they achieve total success.
¥ If the heroes hit the failure limit or time runs out, and if they’ve
achieved at least two more successes than failures, they achieve a
partial success.
¥ If the heroes hit the failure limit or time runs out, and if they
don’t have at least two more successes than failures, they suffer
total failure.
Tests
263
Karrel, an elementalist, thinks the group might cross the desert faster
if they have specially modified sandshoes that distribute their weight
and prevent their feet from sinking into the sand. The Director loves the
idea, and decides that making four pairs of the shoes while traveling the
desert is a medium Reason test. Karrel gets to use their Tailoring skill
and winds up with a total of 13—a success with a consequence. The
Director decides to gain an additional 2 Malice at the start of the next
combat encounter as a consequence, but the group now has 2 successes
and 1 failure on the montage test.
Val, a conduit, offers to scout ahead for the group with an Intuition
test, using the Navigate skill to find the best path forward and avoid
hazards such as chasms and quicksand. The Director thinks that acting
as lookout in a vast desert is an easy task. Val smashes it with a 21—a
success with a reward—and the Director decides to get creative. Val’s
lookout skills grant the next hero to act in the montage test an edge on
their test. At the end of the first montage test round, the heroes have 3
successes and 1 failure.
Interlude
Before the next montage test round, the Director pauses the montage
test to run a battle with a kingfissure worm, who attacks the heroes as
they cross over an ancient ruin partially buried in the sand. After the
heroes defeat the kingfissure worm, the test continues.
Montage Test Round 2
Urdoncara wants to make a Might test using the Lift skill to carry most
of the group’s equipment as they cross the desert, allowing her allies
to move more quickly while she keeps up with her superior fortitude.
The Director thinks this arduous task has a hard difficulty. Urdoncara
gets a 17 on the test thanks to the edge from Val’s earlier success. The
montage test has 4 successes and 1 failure.
Jorn, eager to prove himself after his last failure, asks to make a Might
test using the Lead skill, representing tying a rope around his waist to
drag his weaker friends over the tallest dunes. The Director likes the
idea but doesn’t think the Lead skill applies to the task. They tell Jorn
that Lift is more appropriate, since the tactician is using his physical
skill to aid his friends and not really doing anything interpersonal. Jorn
agrees, and the Director sets the test at medium difficulty. Making
the test with a bane because of his previous failure, the tactician rolls
a 15, which is a success with a consequence. The montage test has 5
successes and 1 failure, but the consequence gives the Director another
2 Malice at the start of the next combat encounter.
Since the group needs only one more success to achieve total success,
Karrel says she’d like to assist Val in whatever task she decides to take
on. Val wants to recall lore about the Khem-hor—the inhabitants of
the Infinite Desert—to remember their time-honored travel techniques
using the History skill. Karrel has the Culture skill, which she can use
to assist by providing information about the lives and society of the
Khem-hor. She makes a Reason test to assist and gets a 16, granting Val
an edge on her upcoming test.
Val attempts to recall lore about the Khem-hor, wanting to know if she
can remember any of their travel from her studies of the history of the
region. The Director has her make a hard Reason test with an edge,
thanks to Karrel’s input on the current state of Khem-hor culture. Val
gets a 17, and the Director decides that the conduit recalls a shortcut
through a canyon tunnel that leads directly to Ahset, avoiding a vast
lake of quicksand. The heroes get their sixth success in the montage
test, achieving total success, and earn 2 Victories.
Other Options
The heroes could have attempted other tests during their travels,
such as an Agility test using the Sneak skill to lead the group through
dangerous shortcuts in the desert without being seen or waylaid by
predators, a Reason test using the Nature skill to find enough food and
water to keep the group hydrated and fed, or a Presence test using the
Music skill to inspire allies to travel faster with song.