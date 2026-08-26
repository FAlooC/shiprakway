SHIPRAKWAY CONSULTING — WEBSITE
===============================

FILES
-----
index.html            The page.
style.css             All styling, including responsive breakpoints.
script.js             Navigation, scroll reveals, active-link tracking, contact form.
assets/logo.png       Full circular logo, transparent background (used in the footer).
assets/logo-mark.png  "S" monogram, transparent background (used in the header).
assets/favicon.ico    Browser tab icon, symbol only (multi-size).
assets/favicon.png    Same icon, high resolution.
assets/apple-touch-icon.png  Home-screen icon for iOS/Android.


ENQUIRY ADDRESSES
-----------------
The site lists two contact addresses:

    support@shiprakway.com            (primary)
    shiprakwayconsulting@gmail.com    (secondary)

Both appear as clickable links in the Contact section and the footer.
Contact-form enquiries are addressed TO the primary and CC'd to the
secondary, so both inboxes receive every enquiry.

To change either one, edit script.js, lines 11-14:

    const CONTACT_EMAILS = {
      primary:   'support@shiprakway.com',
      secondary: 'shiprakwayconsulting@gmail.com'
    };

The visible links update themselves from those two values — you do not
need to edit index.html.

NOTE: support@shiprakway.com only works once the shiprakway.com domain
is registered and its mailbox is set up. Until then, enquiries sent to
it will bounce; the Gmail address will still receive its copy.


HOW THE CONTACT FORM WORKS
--------------------------
The form validates the input, then opens the visitor's own email
program with a pre-filled message addressed to CONTACT_EMAIL.

What this means in practice:
  - Nothing to set up, no server, no monthly fee. Works on any host.
  - The visitor has to press Send in their own mail app. Some people
    will not complete that step.
  - Visitors using webmail in a browser with no mail handler
    configured may see nothing happen. For them, the email address is
    also printed as a normal clickable link beside the form.
  - You get no record of enquiries that were started but not sent.

If enquiry volume matters, switch to a hosted form service later.
The form fields already carry proper `name` attributes, so moving to
Formspree, Netlify Forms, Web3Forms or similar is a small change:
add an `action` and `method` to the <form> tag in index.html and
delete the submit handler at the bottom of script.js.


HOSTING
-------
Upload the whole folder — index.html, style.css, script.js and the
assets/ folder — to your hosting provider's public directory.
No build step, no dependencies.

To preview locally, open index.html in any browser.


OPTIONAL POLISH
---------------
1. Add a phone number next to the email address in the Contact
   section (index.html, look for "contact-direct").
2. Update the canonical URL and og:image in <head> once the domain
   is live.
3. Replace the illustrated bottles in the hero with a real photograph
   of your work if you have one.
4. Ask your designer for the original vector (SVG or AI/EPS) of the
   logo. The PNGs here were recovered from a flattened image; a vector
   would stay crisp on high-resolution screens and in print.
