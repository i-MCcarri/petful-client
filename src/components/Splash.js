import React from 'react';
import '../root/Root.css';

export default class Splash extends React.Component {
    render() {
        return (
        <div className='body-wrapper'>
            <h2>Adopt by Appointment</h2>
            <h3><b>Here&#8217;s how it works:</b></h3>
            <ol><li>First, view all of our pet profiles and identify the available pet you wish to bring home.</li><li>Then fill out and submit one of the pre-adoption applications below and include the type of the pet you wish to have join your family. A team member will go over the pet’s specific needs with you during an initial call, to see if you would be a good match.</li></ol>
            <p>Appointments at Petful Humane will be conducted using current social distancing measures and cleaning protocols put in place to ensure the health and safety of our staff and adopters. You will receive information about these new guidelines prior to your appointment.</p>
            <p>* Please note that appointment availability may be delayed due to current and evolving guidelines related to COVID-19.</p>
            <h2><strong>Frequently asked questions</strong></h2>
            <h3>How much will my adoption cost?</h3>
            <p><strong>Dogs</strong></p>
            <ul><li>Puppies under 6 months –&nbsp;$400</li><li>Dogs 6+ months and over 25 lbs –&nbsp;$200</li><li>Dogs 6+ months and under 25 lbs – $275</li></ul>
            <p><strong>Cats</strong></p>
            <ul><li>Kittens under 6 months –&nbsp;$150</li><li>Kittens 6 months to a year –&nbsp;$100</li><li>Cats 1 to 7 years –&nbsp;$75</li><li>Cats 7+ years –&nbsp;$50</li></ul>
            <p><strong>What&#8217;s included in the cost?</strong></p>
            <p>Adoption fees&nbsp;help provide medical care, training, food, and shelter to our animals. When you adopt from Petful Humane, you receive more than $570 of services. We also offer adoption events with reduced fees on a regular basis. Sign up for our emails to receive notifications of upcoming adoption events.</p>
            <p></p>
        </div>
        );
    }
}