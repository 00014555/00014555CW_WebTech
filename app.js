var x = 0;
var text = `Freelancing has grown in popularity in recent years, with more than one-third of people seeking it. Furthermore, folks aren't freelancing because they have to. The majority of people opt to be self-employed on purpose. When you consider the advantages and independence of being your own employer, this isn't unexpected. Freelancer talent offers your business flexible access to special expertise at the proverbial drop of a hat. The fact that freelancers are not technically employees greatly reduces the risk your company may incur. Freelancers can also save you and your coworkers from avoidable difficulties. Because they are representing themselves, independent contractors usually require little supervision. They've probably done hundreds or thousands of gigs before, and they know how to tackle a project quickly and smartly with minimal guidance—after all, their livelihood is on the line. Building and cultivating relationships is crucial for freelancers. And what is the most important aspect of any business partnership? Delivering high-quality work.This mindset will only benefit your company.`;
var speed = 1;

function myTyping() {
    if (x < text.length) {
        document.getElementById("text") .innerHTML += text.charAt(x);
        x++;
        setTimeout(myTyping, speed);
    }
}