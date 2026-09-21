import type { BlogPost } from "@/lib/services/blog-service";
import globalPathway from "@/assets/sports/global-pathway.jpg";
import grassrootsMatch from "@/assets/sports/grassroots-match.jpg";
import matchPrep from "@/assets/sports/match-prep.jpg";
import scouting from "@/assets/sports/scouting.jpg";
import teamCommunity from "@/assets/sports/team-community.jpg";
import trainingWide from "@/assets/sports/training-wide.jpg";

/**
 * Static seed data for the /demo/* marketing routes.
 * No auth, no network, and no database. This is purely hardcoded content so the
 * dashboard screenshots look populated and real.
 */

export interface DemoProfile {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar_url: string | null;
}

export const demoProfile: DemoProfile = {
  first_name: "Amara",
  last_name: "Okafor",
  email: "stories@opportunity4alltalents.com",
  phone: "+1 (415) 555-0142",
  avatar_url: "/images/homepage/avatar-1.png",
};

// Bundled local photography (src/assets/sports).
const LOCAL_IMAGES = [
  grassrootsMatch,
  scouting,
  trainingWide,
  matchPrep,
  globalPathway,
  teamCommunity,
];

// Real, freely-usable photos from Unsplash. They were sourced to give each
// post a distinct image instead of recycling the small local set.
const ONLINE_IMAGES = [
  "https://images.unsplash.com/photo-1641280173256-0ac1b2f4cd78?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585757318177-0570a997dc3a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1745778110673-c96c14d1c297?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1695326402341-e980b09af856?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1739593771832-bbb60cfeef88?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574772135913-d519461c3996?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1650897877790-0e171d2207dc?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613125479775-0c09b9a46ae1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529629468183-b9cddd7be13b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1745012010615-47abbeb3e906?q=80&w=1200&auto=format&fit=crop",
];

// 17 unique images in total: one per published post, so nothing repeats.
const FEATURED_IMAGES = [...LOCAL_IMAGES, ...ONLINE_IMAGES];

const AUTHOR_AVATARS: Record<string, string> = {
  "Amara Okafor": "/images/homepage/avatar-1.png",
  "Daniel Reyes": "/images/homepage/avatar-2.png",
  "Priya Raman": "/images/homepage/avatar-3.png",
  "Sofia Lindqvist": "/images/homepage/avatar-4.png",
  "Marcus Chen": "/images/homepage/avatar-1.png",
};

// Local word-count estimate so read times actually match the content length
// (kept independent from lib/services/blog-service.ts to avoid a circular import).
const estimateReadTime = (html: string): string => {
  const text = html.replace(/<[^>]*>/g, " ");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
};

interface Seed {
  title: string;
  category: string;
  author: string;
  date: string;
  status: "draft" | "published";
  content: string;
}

const seeds: Seed[] = [
  {
    title: "From local pitch to wider visibility: a player story",
    category: "Player Stories",
    author: "Amara Okafor",
    date: "Aug 18, 2026",
    status: "published",
    content: `<p>Emeka was sixteen when a coach at his local club first suggested he was good enough to play beyond the neighborhood league. The pitch he trained on had no grass to speak of, a goal missing its net, and a crowd of maybe forty people on a good Sunday. None of that told you anything about how he played. What told you something was the way he controlled a ball under pressure, the runs he made without the ball, and how often his teammates looked for him in the final third.</p>
<p>That gap, specifically the space between what a player can do and who actually gets to see it, is the entire reason player stories exist. A talented sixteen-year-old on a dirt pitch in a small town has, historically, needed an enormous amount of luck to be seen by anyone with the power to change his trajectory: a travelling scout, a connected coach, a viral video. Most never get that luck. Not because they lack the talent, but because nobody built the bridge between the pitch and the people looking for players like them.</p>
<h2>What actually changed for Emeka</h2>
<p>The shift wasn't a single moment. It was a sequence of small, deliberate steps: match footage filmed consistently over several months rather than a single highlight clip, a written profile that gave scouts context they could trust, including position, physical development, coachability, and character, and a story that explained who he was, not just what he could do on a ball.</p>
<p>Three months after his first profile went out, a regional academy invited him to a two-week trial. He didn't make the cut on that trial. He made it on the second one, six months later, after his coaches used the same documentation process to show how much he'd developed in the interim.</p>
<blockquote>Talent doesn't need to be manufactured. It needs to be documented honestly, consistently, and shared with the people who are actually looking for it.</blockquote>
<h2>Why the story matters as much as the footage</h2>
<p>Scouts see thousands of clips a year. Most are edited to hide weaknesses and inflate a handful of good moments. What actually earns a second look is context: how a player has developed over time, how they respond to setbacks, and whether the people around them, including coaches, family, and teammates, believe in the direction they're heading. A story that includes all of that is worth more than a highlight reel with a soundtrack.</p>
<h2>What this means for other players like him</h2>
<p>Emeka's path is not unique because he is exceptional. It's unique because someone took the time to document it properly. There are players on pitches just as rough as his, right now, who could use the same thing: consistent footage, an honest profile, and someone willing to make the introduction. That's the gap Opportunity 4 All Talents exists to close.</p>`,
  },
  {
    title: "Preparing a player profile that scouts can use",
    category: "Education",
    author: "Daniel Reyes",
    date: "Aug 12, 2026",
    status: "published",
    content: `<p>Most player profiles fail before a scout ever watches a single second of footage. They fail because they're built to impress rather than to inform, which means they tend to be long on adjectives and short on the specific details a recruitment team actually needs to make a decision. A useful profile isn't a highlight reel with a personality. It's a document a busy scout can scan in ninety seconds and know exactly whether this player fits what they're looking for.</p>
<h2>The five things every profile needs</h2>
<ul>
  <li><strong>Position and role clarity.</strong> Not just "midfielder," but what kind: a holding player who breaks up play, a box-to-box runner, a creative number ten. Vague positioning wastes a scout's time.</li>
  <li><strong>Physical development context.</strong> Height and weight matter, but for younger players it matters just as much where they are in their physical maturity relative to peers. A late developer with elite technique reads very differently than a physically dominant player relying on size.</li>
  <li><strong>Unedited match footage.</strong> Full halves or full matches, not just a highlight cut. Scouts want to see the ninety minutes a player didn't think anyone was watching.</li>
  <li><strong>Coach and character context.</strong> A short, honest note from someone who has actually coached the player, offering not generic praise but specific observations about coachability, attitude in setbacks, and how they treat teammates.</li>
  <li><strong>A clear point of contact.</strong> Scouts routinely pass on promising players simply because following up took three email chains and two weeks. Make the next step obvious.</li>
</ul>
<h2>What to leave out</h2>
<p>Cut the music. Cut the slow-motion replays of the same goal from four angles. Cut superlatives that aren't backed by anything specific. A profile that reads like an advertisement invites skepticism; a profile that reads like an honest scouting report invites trust.</p>
<blockquote>Scouts don't need a highlight reel with a soundtrack. They need position, footage, physical context, and character: the things they can actually verify.</blockquote>
<h2>Building this at scale</h2>
<p>For one player, a good profile is a few hours of work. For a program trying to give dozens of players the same fair shot, it requires a repeatable process: consistent filming standards, a template for the written profile, and a coach willing to write an honest paragraph rather than a flattering one. That repeatability is what turns "a good idea" into something that actually reaches scouts on a consistent basis, and it's the backbone of how Opportunity 4 All Talents builds every player profile it sends out.</p>`,
  },
  {
    title: "What makes football footage useful to a scout",
    category: "Pathways",
    author: "Priya Raman",
    date: "Aug 6, 2026",
    status: "published",
    content: `<p>Ask ten parents to film their child's match and you'll get ten different results: some too far from the pitch to make out a face, some so tightly zoomed on the ball that off-ball movement is invisible, most edited down to a highlight reel that tells a scout almost nothing useful. Footage is the single most common thing sent to recruitment staff, and it is also the thing most consistently done badly.</p>
<h2>The three questions scouts are actually asking</h2>
<p>Every experienced scout watching footage is unconsciously running through the same checklist, regardless of the sport or level: Can this player execute under pressure, repeatedly? What do they do without the ball? And does their decision-making hold up over ninety minutes, or only in isolated flashes?</p>
<p>A tightly-cut highlight reel can only ever answer the first question, and only partially, because it shows moments of success stripped of the failures and context around them. It tells a scout nothing about work rate, positioning, or consistency. That's why experienced recruiters routinely ask for full-match footage instead, even when a highlight reel is offered up front.</p>
<h2>What good filming actually looks like</h2>
<ul>
  <li>A wide, elevated angle that keeps the full width of play visible, not just the ball.</li>
  <li>Continuous footage across at least one full half, ideally a complete match.</li>
  <li>Stable framing. Shaky, hand-held footage makes it hard to judge spatial awareness and positioning.</li>
  <li>Basic context recorded alongside it: opposition level, weather conditions, and the player's role that day.</li>
</ul>
<blockquote>Most footage answers questions nobody asked. Useful footage answers the three questions a scout is actually trying to solve.</blockquote>
<h2>Why this changes outcomes, not just presentation</h2>
<p>When we rebuilt our filming guidance around these three questions instead of "make it look impressive," the quality of scout responses changed noticeably. Fewer profiles were dismissed after thirty seconds. More led to a follow-up question, which is the entire goal, since footage doesn't need to convince a scout on its own. It needs to earn the next conversation.</p>`,
  },
  {
    title: "The role of consistent development in player visibility",
    category: "Partnerships",
    author: "Amara Okafor",
    date: "Jul 29, 2026",
    status: "published",
    content: `<p>Every scout has a story about the player who had one unforgettable match and then disappeared from view. A hat-trick against a weak opponent, a viral clip, a burst of attention, and then nothing, because the moment wasn't backed by anything sustained. Visibility built on a single highlight is fragile. Visibility built on documented, consistent development is what actually holds a scout's attention over months, not minutes.</p>
<h2>Why one match is never enough evidence</h2>
<p>A single standout performance can be luck, a weak opponent, or a good day. Experienced recruiters know this, which is exactly why a lone viral clip rarely converts into serious interest. What convinces a club to invest time in a young player is a pattern: improvement tracked across a season, not a highlight from one Sunday.</p>
<p>That pattern only becomes visible if someone is actually documenting it. Most talented young players are not tracked consistently. Their footage is scattered across different people's phones, their development notes live in a coach's head, and nobody is compiling any of it into something a scout could review months apart and see genuine progress in.</p>
<h2>What consistent documentation actually looks like</h2>
<ul>
  <li>Match footage recorded on a regular schedule, not just for "big" games.</li>
  <li>Short development notes logged after each trial, camp, or key match, rather than written months later from memory.</li>
  <li>A single, organized profile that updates over time rather than a new document created from scratch each time someone asks.</li>
</ul>
<blockquote>Most declines are recoverable. The players who keep getting looked at again are the ones whose progress somebody actually wrote down.</blockquote>
<h2>The compounding effect</h2>
<p>A player documented consistently for a year doesn't just have more footage. They have a story a scout can trust, because it's been observed and recorded over time rather than assembled after the fact. That's the difference between "this player had a good match once" and "this player has been getting better for a year, and here's the record of it." The second version is the one that gets a phone call back.</p>`,
  },
  {
    title: "Supporting families through football pathway decisions",
    category: "Player Stories",
    author: "Sofia Lindqvist",
    date: "Jul 22, 2026",
    status: "published",
    content: `<p>When a fourteen-year-old is invited to a residential academy trial six hours from home, the decision in front of the family is rarely just about football. It's about school, about money for travel, about whether an unfamiliar academy will genuinely look after a child who has never lived away before. Families making these calls are often doing so for the first time, with no one to compare notes with and very little reliable information about what to expect.</p>
<h2>The decisions families actually face</h2>
<ul>
  <li><strong>Trial or no trial:</strong> Is this opportunity credible, and worth the cost and disruption of travel?</li>
  <li><strong>Academy or local development:</strong> Does moving away accelerate a player's progress enough to justify separating a young teenager from their support system?</li>
  <li><strong>School and football:</strong> Can education realistically continue alongside an intensified training schedule?</li>
  <li><strong>Who to trust:</strong> Distinguishing a legitimate academy or agent from the many opportunistic actors who prey on hopeful families in football.</li>
</ul>
<h2>What actually helps</h2>
<p>Families rarely need someone to make the decision for them. They need someone who has seen these decisions play out before, who can explain honestly what a trial actually involves, what questions to ask an academy before committing, and what red flags look like. That kind of grounded, unglamorous guidance is worth more than encouragement.</p>
<blockquote>Trials, academies, and travel all pull families in different directions. What most families need isn't more excitement about the opportunity. It's a clear-headed model for making the decision with confidence.</blockquote>
<h2>Building trust before the trial, not during it</h2>
<p>The families who navigate this best are the ones supported early, before the pressure of a trial deadline forces a rushed decision. That means honest conversations about costs, realistic timelines for development, and a plan for what happens if a trial doesn't lead anywhere, because for most players, the first trial doesn't. What matters is whether the family has the information and support to make the next decision well, regardless of how the first one goes.</p>`,
  },
  {
    title: "How coaches can document emerging talent responsibly",
    category: "Scouting",
    author: "Daniel Reyes",
    date: "Jul 15, 2026",
    status: "published",
    content: `<p>A coach filming a training session for feedback is doing something different from a coach filming a player specifically to send to scouts, even if the camera setup looks identical. The second version carries a responsibility the first doesn't: the footage, the notes, and the story built around a minor player will follow them, and it should be built with care rather than urgency.</p>
<h2>What responsible documentation requires</h2>
<ul>
  <li><strong>Consent, explained plainly.</strong> Parents and players should understand exactly what is being filmed, who it will be shared with, and why, rather than signing a vague blanket permission at registration.</li>
  <li><strong>Accuracy over flattery.</strong> A profile that overstates a player's ability sets them up for a trial they aren't ready for, which is worse for their confidence than not being seen at all.</li>
  <li><strong>Privacy by default.</strong> Footage and profiles of minors should go to specific, verified recipients, instead of sitting publicly online where anyone can access them indefinitely.</li>
  <li><strong>A long view, not a rush.</strong> The pressure to "get a player seen" quickly leads to inflated claims and premature trials. Responsible documentation can wait for a player to actually be ready.</li>
</ul>
<h2>Why this changed our process completely</h2>
<p>We used to treat documentation primarily as a visibility problem: get footage, write a profile, send it out. Once we started treating it as a responsibility to the player first, the process slowed down, but the outcomes improved. Fewer players were sent into trials mismatched to their level. Parents trusted the process more, because they understood exactly what was happening with their child's information.</p>
<blockquote>Documenting a young player is a responsibility, not just a highlight opportunity. Treating it that way changes almost everything about how you do it.</blockquote>
<h2>What good practice looks like day to day</h2>
<p>In practice, this means coaches keeping footage organized and access-controlled, writing development notes honestly even when they're not flattering, and involving parents in every decision about where a player's information goes next. None of this is complicated. It just requires treating the player as someone whose long-term interest matters more than a quick placement.</p>`,
  },
  {
    title: "Turning sponsorship into a meaningful football story",
    category: "Partnerships",
    author: "Priya Raman",
    date: "Jul 8, 2026",
    status: "published",
    content: `<p>We reviewed forty real partnership activations across our sponsor network this year, from a single Bronze-tier logo placement to a fully co-branded Founding initiative. The pattern that separated the partnerships people actually remembered from the ones that quietly expired wasn't budget size. It was whether the sponsorship told a specific story instead of just occupying space.</p>
<h2>The difference between visibility and a story</h2>
<p>A logo on a website banner is visibility. It's easy to buy and easy to ignore. A story is different: it's a named player, a specific challenge, a real outcome a brand helped make possible. "Ventures helped fund grassroots equipment for twelve players this season" is a sentence people remember. "Ventures is a proud sponsor" is not.</p>
<h2>What separated the strongest activations</h2>
<ul>
  <li>They attached the brand to a specific player, initiative, or milestone, rather than a generic sponsorship tier.</li>
  <li>They had a natural moment to tell the story: a trial outcome, an academy placement, a season summary, rather than a one-off announcement post.</li>
  <li>They gave the sponsor's own team something concrete to point to internally, not just an impression count.</li>
</ul>
<blockquote>A handful of storytelling choices explained almost all the difference in impact between our strongest partnerships and our weakest ones.</blockquote>
<h2>Making this practical at every tier</h2>
<p>This doesn't require a Founding-level budget. A Bronze sponsor can still be attached to a specific quarterly newsletter feature about a real player. A Silver sponsor's podcast placement can reference an actual academy story rather than a generic ad read. The mechanism is the same at every level: replace "we are a sponsor" with "here is what this partnership made possible," and the sponsorship stops being background noise.</p>`,
  },
  {
    title: "What clubs look for beyond a highlight reel",
    category: "Scouting",
    author: "Marcus Chen",
    date: "Jun 30, 2026",
    status: "published",
    content: `<p>A highlight reel can get a club's attention once. It rarely gets a player a contract. Recruitment staff at every level, whether academy, semi-professional, or professional, are ultimately trying to answer a harder question than "can this player do something impressive": can this player do the unglamorous parts of the job, consistently, for a team that depends on them?</p>
<h2>The four things recruitment staff actually evaluate</h2>
<ul>
  <li><strong>Consistency across matches, not moments.</strong> One brilliant performance is noted. Reliable performance across a run of matches, including bad ones, is what gets acted on.</li>
  <li><strong>Coachability.</strong> How a player responds to correction, to being substituted, to a tactical instruction they disagree with. Clubs invest in players they can develop, not just players who are already finished products.</li>
  <li><strong>Off-ball behavior.</strong> What a player does in the sixty-plus minutes they don't have the ball says more about tactical intelligence than any individual highlight.</li>
  <li><strong>Character under a poor result.</strong> How a player carries themselves after a loss or a personal mistake is one of the most reliable predictors recruiters use.</li>
</ul>
<blockquote>A highlight reel gets attention once. Consistent, verifiable performance is what earns a second look from a club.</blockquote>
<h2>What this means for how players should present themselves</h2>
<p>Players and families chasing visibility often over-invest in the highlight reel and under-invest in everything else a club actually wants to see: full-match footage, coach references, a track record across a season. The players who get real, sustained interest are usually the ones whose documentation answers these four questions honestly, not the ones with the most dramatic clip.</p>`,
  },
  {
    title: "Professionalism off the pitch: a practical guide",
    category: "Education",
    author: "Sofia Lindqvist",
    date: "Jun 24, 2026",
    status: "published",
    content: `<p>Trial preparation exposes gaps that training alone never will. A player can be technically excellent and still lose an academy invitation over things that have nothing to do with football: turning up late, struggling to communicate with unfamiliar coaches, or simply not knowing how to conduct themselves in an environment more structured than their local club.</p>
<h2>The basics that get overlooked</h2>
<ul>
  <li><strong>Punctuality and communication.</strong> Academies notice players who arrive early, introduce themselves, and follow instructions without needing to be told twice.</li>
  <li><strong>Sleep and nutrition, especially before travel.</strong> A player arriving at a trial exhausted from an overnight journey is competing at a real disadvantage, and it's avoidable with basic planning.</li>
  <li><strong>Handling feedback in real time.</strong> Trials often include live tactical correction. Players who visibly sulk or shut down are remembered for that far longer than for one mistake.</li>
  <li><strong>Media and social conduct.</strong> Academies increasingly review a player's public social media presence. A pattern of poor conduct online has cost players real opportunities.</li>
</ul>
<blockquote>Trial prep exposed every gap in how our players presented themselves off the pitch. That turned out to be a gift, because it's far easier to fix before a trial than to explain after one.</blockquote>
<h2>Why this is a coaching responsibility, not just a family one</h2>
<p>Families can't always prepare a player for what a professional environment expects, especially if nobody around them has been through it before. That's why this belongs in the same conversation as technical development: a session on trial etiquette, travel planning, and communication expectations is as valuable to a player's chances as an extra training session, and sometimes more valuable still.</p>`,
  },
  {
    title: "Building a player story with context and credibility",
    category: "Pathways",
    author: "Marcus Chen",
    date: "Jun 17, 2026",
    status: "published",
    content: `<p>Clubs don't want more highlight clips. They see hundreds a month, most edited to hide weaknesses and inflate a handful of good touches. What earns real attention from a recruitment committee is a story they can actually verify, one built on context and credibility rather than editing.</p>
<h2>What "credible" actually means to a scout</h2>
<p>Credibility isn't about sounding impressive. It's about being checkable. A profile that says a player "dominated" a match means little on its own. A profile that includes full-match footage, an honest coach assessment, and a specific, verifiable statistic, such as minutes played, matches started, or development milestones reached, gives a scout something they can independently confirm rather than take on faith.</p>
<h2>The three layers of a credible story</h2>
<ul>
  <li><strong>Verified footage:</strong> unedited match video that shows the full range of a player's performance, not a highlight compilation.</li>
  <li><strong>Independent context:</strong> a coach or scout who isn't the player's family, providing an honest assessment that can be cross-checked.</li>
  <li><strong>A consistent record:</strong> documentation across multiple matches and months, not a single standout moment presented as representative.</li>
</ul>
<blockquote>Clubs don't want more highlight clips. They want a story they can verify and explain to a recruitment committee.</blockquote>
<h2>Why this matters more as a player moves up levels</h2>
<p>At the grassroots level, enthusiasm can carry a story a long way. At academy and professional levels, recruitment committees are accountable for the resources they commit to a signing, and they need to be able to defend that decision internally. A credible, verifiable story gives the person championing a player something solid to bring into that room, and that is often the actual difference between a player getting a trial and getting overlooked.</p>`,
  },
  {
    title: "Five ways brands can support grassroots football",
    category: "Partnerships",
    author: "Amara Okafor",
    date: "Jun 9, 2026",
    status: "published",
    content: `<p>Most brands entering football sponsorship default to the same idea: put a logo on something visible and call it community investment. It's not wrong, exactly, but it's the least effective use of a partnership budget at the grassroots level, where the actual constraints are rarely about visibility and almost always about basic resources.</p>
<h2>Five formats that make a real difference</h2>
<ul>
  <li><strong>Equipment funding.</strong> Boots, balls, and training gear are a persistent, unglamorous need at the grassroots level, and funding them has an outsized, immediate impact compared to media spend.</li>
  <li><strong>Filming and documentation support.</strong> Many grassroots clubs have talented players nobody is filming consistently. Funding a camera, a coach's time, or a documentation program directly increases how many players actually get seen.</li>
  <li><strong>Event and trial-day sponsorship.</strong> Covering the cost of a showcase event or trial day removes a real barrier, namely travel and entry costs, that keeps otherwise-qualified players from being seen at all.</li>
  <li><strong>Academy scholarships.</strong> Direct financial support for a specific player's academy fees turns a sponsorship into a documented, individual outcome rather than an abstract contribution.</li>
  <li><strong>Mentorship and career-adjacent skills.</strong> Brands with expertise outside football, such as media, business, or education, can offer players and families guidance that clubs alone can't provide.</li>
</ul>
<blockquote>Four partnership formats, one clear winner, and a lesson about honoring the sponsors who backed us early.</blockquote>
<h2>Choosing the right format for your brand</h2>
<p>The right format depends on what a brand can uniquely offer, not just what budget is available. A media company is well placed to support documentation. A retailer is well placed to fund equipment. What matters most is picking a format that produces a specific, attributable outcome, such as a player equipped, a trial made possible, or a scholarship funded, rather than a sponsorship that only ever shows up as a logo.</p>`,
  },
  {
    title: "Following the pathway from grassroots to academy football",
    category: "Scouting",
    author: "Daniel Reyes",
    date: "Jun 2, 2026",
    status: "published",
    content: `<p>The distance between a grassroots pitch and an academy contract looks, from the outside, like a single leap. In practice it's a sequence of specific, traceable milestones, and players who understand the sequence tend to navigate it with far less wasted time and disappointment than those chasing a single big break.</p>
<h2>The three milestones that actually matter</h2>
<ul>
  <li><strong>Milestone one is consistent local performance.</strong> Before any wider visibility matters, a player needs a documented track record at their current level: regular minutes, coach assessments, and match footage across a full season, not a handful of standout games.</li>
  <li><strong>Milestone two is a credible introduction.</strong> Visibility beyond the local level almost always comes through a specific, trusted introduction, such as a coach's recommendation or a documented profile shared with a scout, rather than a cold approach or a viral clip.</li>
  <li><strong>Milestone three is trial performance and follow-through.</strong> A trial invitation isn't the finish line. What happens in the trial, and how consistently a player follows up afterward, determines whether it converts into an actual pathway.</li>
</ul>
<blockquote>Every step from grassroots trial to academy offer should be traceable. We got there in three milestones.</blockquote>
<h2>Why traceability matters more than speed</h2>
<p>Families and players under pressure to "get seen quickly" often skip straight to chasing milestone three without the foundation of milestone one, and end up in trials they aren't prepared for, which can do more harm than good to a player's confidence. A pathway that respects the sequence, even if it takes longer, produces far more durable outcomes than one built around shortcuts.</p>`,
  },
  {
    title: "Life inside an academy: a week in pictures",
    category: "Pathways",
    author: "Marcus Chen",
    date: "May 26, 2026",
    status: "published",
    content: `<p>From the outside, academy life looks like match day: the kit, the badge, the highlight clip. What actually fills a player's week is far less photogenic, and far more responsible for whether a talented sixteen-year-old actually develops into something more. We followed one academy cohort for a full week to see what that looks like in practice.</p>
<h2>Monday to Wednesday: the unglamorous majority</h2>
<p>Most of the week is repetition: technical drills before sunrise, classroom sessions on tactics and video review, recovery work that looks like nothing is happening at all. Players spend more hours on individual skill correction, such as a first touch adjusted a few degrees or a passing angle repeated dozens of times, than on anything resembling a highlight.</p>
<h2>Thursday: the parts nobody films</h2>
<p>Physio appointments. Nutrition planning. For younger players living away from home for the first time, a surprising amount of the week is spent simply adjusting, including dealing with homesickness, squeezing schoolwork around training, and learning to manage their own schedule without a parent checking in. Academies that do this well treat it as seriously as the football.</p>
<h2>Friday and the weekend: where it's tested</h2>
<p>Match day is the visible payoff, but by Friday, most of what determines a player's performance has already happened during the week. The players who stand out on Saturday are rarely the ones who trained hardest that single day. They're the ones whose week of repetition, recovery, and adjustment actually held up under a real match.</p>
<blockquote>Most of what determines a player's progress happens quietly, between the matches nobody is filming.</blockquote>
<h2>What this means for players not yet in an academy</h2>
<p>Understanding this rhythm matters for players still working toward an academy trial. The technical polish scouts look for isn't built in a single standout session. It's built in exactly this kind of unglamorous, repeated week, which is worth replicating at whatever level a player currently trains at.</p>`,
  },
  {
    title: "How a scouting visit actually works",
    category: "Scouting",
    author: "Daniel Reyes",
    date: "May 19, 2026",
    status: "published",
    content: `<p>Most families never see what a scout actually does during a visit, and the uncertainty fills in with assumptions that are usually wrong. A scouting visit is not a single dramatic moment of discovery. It's a methodical process that starts well before anyone arrives at the pitch and continues long after the final whistle.</p>
<h2>Before the visit</h2>
<p>A credible scout rarely turns up cold. By the time they attend a match in person, they've usually already reviewed footage, spoken to a coach or contact who vouches for the player, and formed a specific question they're trying to answer, not "is this player good," but something narrower, like "can this player operate in a deeper role" or "how do they handle a physical mismatch."</p>
<h2>During the match</h2>
<p>Contrary to expectation, a scout is rarely watching the ball. Most of their attention is on the player being assessed during the moments they don't have the ball: positioning, communication with teammates, work rate when the team is defending, body language after a mistake. The goal or the flashy dribble is almost incidental to what they're actually recording.</p>
<h2>After the visit</h2>
<p>The follow-up is where most families lose track of the process. A single visit rarely produces an immediate decision. It typically produces a written report, shared internally, that may lead to a second visit, a request for more footage, or an invitation to a trial, all of which can take weeks, not days.</p>
<blockquote>Our interview notes, the questions we dropped, and the one signal that predicts a player's readiness for trial all point to the same thing: patience with the process matters as much as talent.</blockquote>
<h2>What families should actually expect</h2>
<p>Silence after a scouting visit is normal, not a rejection. The most useful thing a family can do is keep the player's documentation current and keep training consistently, rather than treating one visit as a verdict. Scouts are building a picture over time, and a good visit is one data point in that picture, not the whole story.</p>`,
  },
  {
    title: "Why grassroots pitches matter as much as academies",
    category: "Education",
    author: "Sofia Lindqvist",
    date: "May 12, 2026",
    status: "published",
    content: `<p>Academies get the funding, the media coverage, and the assumption that this is where talent is actually made. It's a reasonable assumption and a mostly incorrect one. Most of the players who eventually reach an academy were first discovered on a far less impressive surface: a dusty local pitch, a school field, a patch of ground with a goal at each end and little else.</p>
<h2>The uncomfortable math of talent distribution</h2>
<p>Academies can only develop the players who reach them, and the players who reach them are disproportionately the ones whose families already had the resources, connections, or geographic luck to get noticed. Talent itself doesn't follow that same distribution. It's spread evenly across grassroots pitches everywhere, regardless of whether anyone with influence happens to be watching that day.</p>
<h2>What grassroots pitches actually provide</h2>
<ul>
  <li>The first and often only place a player can simply play, without cost barriers or selection processes.</li>
  <li>A testing ground where raw ability and instinct show up before formal coaching has smoothed them into something more conventional.</li>
  <li>The starting point for nearly every documented player story we've built, including the ones that eventually reach academy level.</li>
</ul>
<blockquote>Academies get the attention, but most players are still discovered somewhere far simpler: a local, dusty pitch that nobody with a camera happened to visit.</blockquote>
<h2>What investing in grassroots actually changes</h2>
<p>Supporting grassroots infrastructure, including equipment, documentation, and basic facilities, isn't charity work adjacent to talent development. It's talent development, arguably the highest-leverage form of it, because it's the only stage where the full pool of potential is actually present. Every academy signing started somewhere closer to this than to the academy itself, and treating that starting point seriously is what determines how much of that talent pool ever gets the chance to be seen.</p>`,
  },
  {
    title: "From boots to boardroom: how brands back football differently",
    category: "Partnerships",
    author: "Priya Raman",
    date: "May 5, 2026",
    status: "published",
    content: `<p>Sponsorship used to mean a logo on a shirt and a line in an annual report. For brands partnering with Opportunity 4 All Talents, it increasingly means something with a name attached, a measurable outcome, and a seat at the table for decisions about where the partnership actually goes next.</p>
<h2>The old model and its limits</h2>
<p>Traditional sponsorship optimizes for reach: impressions, logo placements, a mention in a press release. It's easy to measure and easy to buy, but it rarely produces a story anyone remembers past the quarter it ran in, and it gives the sponsoring brand little influence over what the money actually accomplishes.</p>
<h2>What's replacing it</h2>
<p>Our Founding-tier partners increasingly ask for something closer to a joint venture than a sponsorship: a named initiative built around a specific outcome, such as a regional talent-development program or a cross-border pathway effort, with shared measurement reviewed jointly on a quarterly basis. The brand isn't just funding visibility. It's shaping strategy.</p>
<ul>
  <li>A named, co-designed initiative rather than a generic sponsorship tier.</li>
  <li>Shared, jointly-reviewed outcomes instead of one-directional reporting.</li>
  <li>Direct input into which regions, age groups, or programs the partnership actually funds.</li>
</ul>
<blockquote>Sponsorship used to mean a logo on a shirt. For brands doing this well now, it means something else entirely: a strategic role in outcomes they helped define.</blockquote>
<h2>Why this shift is accelerating</h2>
<p>Brands are under more internal pressure to justify sponsorship spend with specific outcomes, not just reach metrics. A named initiative with jointly-reviewed results gives a sponsor's own leadership something concrete to evaluate, which is proving to be a far easier case to make internally than "we bought a banner and some impressions."</p>`,
  },
  {
    title: "What a match report can tell a scout that a highlight reel can't",
    category: "Player Stories",
    author: "Amara Okafor",
    date: "Apr 28, 2026",
    status: "published",
    content: `<p>A highlight reel shows the goal. A match report shows whether the player could do it again, under a different kind of pressure, in the eighty-ninth minute instead of the tenth. That distinction is the entire reason experienced recruiters trust a structured match report over an edited clip, even when the clip is more exciting to watch.</p>
<h2>What a good match report actually captures</h2>
<ul>
  <li><strong>Decision-making under pressure:</strong> not just what a player did with the ball, but what options were available and whether they chose well, repeatedly, as the match got harder.</li>
  <li><strong>Off-ball movement across all ninety minutes:</strong> positioning, communication, and work rate during the long stretches without the ball, which is where most of a match actually happens.</li>
  <li><strong>Consistency, not peak moments:</strong> how a player's performance held up in minute seventy-five compared to minute five, which says far more about physical and mental conditioning than any single highlight.</li>
  <li><strong>Response to adversity:</strong> a missed chance, a tactical mistake, a tough opponent matchup, and specifically how the player adjusted afterward.</li>
</ul>
<blockquote>A highlight reel shows the goal. A match report shows whether the player could do it again, under pressure, later in the match.</blockquote>
<h2>Why this format is becoming standard practice</h2>
<p>As more recruitment decisions carry real financial and reputational stakes, scouts increasingly need documentation they can defend to a recruitment committee, not just a compelling video, but a structured account of how a player actually performs across the full range of a match. A well-built match report gives them exactly that, and it's become one of the most requested pieces of documentation in every profile we build.</p>`,
  },
  {
    title: "Draft: emerging African football outlook",
    category: "Football",
    author: "Priya Raman",
    date: "Aug 20, 2026",
    status: "draft",
    content: `<p>Working notes on where African football talent pipelines open up next, and who benefits from getting there early. This draft tracks academy investment trends, cross-border pathway programs, and the regions where grassroots infrastructure is improving fastest. It still needs to be finished and fact-checked before publishing.</p>`,
  },
  {
    title: "Draft: conversations with football scouts",
    category: "Scouting",
    author: "Marcus Chen",
    date: "Aug 19, 2026",
    status: "draft",
    content: `<p>Our interview notes, the questions we dropped, and the one signal that predicts a player's readiness for trial. This draft compiles takeaways from a series of scout conversations conducted this quarter. It is still being organized into a publishable piece.</p>`,
  },
  {
    title: "Draft: the player visibility playbook",
    category: "Player Stories",
    author: "Sofia Lindqvist",
    date: "Aug 15, 2026",
    status: "draft",
    content: `<p>A step-by-step playbook for getting a player seen when scouts, clubs, and timelines all disagree with each other. This draft outline covers documentation timing, trial sequencing, and family decision points. It is pending final review before publishing.</p>`,
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/^draft:\s*/, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const demoBlogPosts: BlogPost[] = seeds.map((seed, index) => ({
  id: `demo-post-${index + 1}`,
  title: seed.title,
  slug: slugify(seed.title),
  category: seed.category,
  author: seed.author,
  author_image: AUTHOR_AVATARS[seed.author] ?? "/images/homepage/avatar-1.png",
  status: seed.status,
  date: seed.date,
  read_time: estimateReadTime(seed.content),
  image: FEATURED_IMAGES[index % FEATURED_IMAGES.length],
  content: seed.content,
  created_at: new Date(2026, 5, 1 + index).toISOString(),
  updated_at: new Date(2026, 5, 1 + index).toISOString(),
}));

export const demoCategories = Array.from(
  new Set(demoBlogPosts.map((post) => post.category))
).sort();
