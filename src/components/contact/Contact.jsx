import React from 'react';
import "./contact.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class ContactPage extends React.Component {
  componentDidMount() {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";

    const load = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }

      document
        .querySelectorAll('iframe[data-tally-src]:not([src])')
        .forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc;
        });
    };

    if (!document.querySelector(`script[src="${widgetScriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
    } else {
      load();
    }
  }

  render() {
    return (
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/doodle1.jpg" alt="" />
        </div>

        <div className="right">
          <h2>Get it touch</h2>

          <iframe
  src="https://tally.so/embed/vGB8zQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
  loading="lazy"
   
  height="420"
  frameBorder="0"
  title="Contact"
  />

          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>
              <a href="https://www.linkedin.com/in/rpavithran/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon color="primary" />
              </a>
            </Button>
            <Button>
              <a href="https://github.com/pavithranR" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default ContactPage;
