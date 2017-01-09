#mos-refresher

Pull to Refresh component for the Ionic Framework

### Description

This component allows you to add a customizable "Pull to Refresh" to an Ionic application.
The behavior and looks can be customized using just HTML/CSS (for simple cases) or, when needed, the Javascript API.

It comes with a few out-of-the-box options in case you prefer to add it without coding.

### Demo

http://codepen.io/martinmoscovich/pen/MYGRoj

### Instruction

This plugin depends on promise for hiding the spinner so you need to inject `$q` to your controller. 

### Installation

To do

### Usage

#### HTML

    <mos-refresher 
        on-refresh="refresh()"
        mos-spinning-icon="ion-ios-refresh"
        icon-size="50"
        icon-refresh-color="#367B6F">

### Thanks

I want to mention that my initial inspiration for this component was the one found at https://github.com/apeatling/web-pull-to-refresh/

