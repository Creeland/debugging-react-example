import React from 'react';
import Accordion from '../Accordion/Accordion';

const styles = {
  container: {
    position: 'relative'
  },
  image: {
    maxWidth: '100%',
    margin: '0 0 .3rem 0',
    borderRadius: '7px'
  },
  accordion: {
    position: 'absolute',
    top: '0',
    width: '100%'
  }
};

class Snippet extends React.Component {
  render() {
    return (
      <figure style={styles.container}>
        <img style={styles.image} src={this.props.imageSrc} alt={this.props.summary}/>
        <div style={styles.accordion}>
          <Accordion
            summary={this.props.summary}
            details={this.props.details}
            color='rgba(0, 0, 0, .7)'
            isOnDarkBackground={true}
            hasBorder={false}
          />
        </div>
      </figure>
    );
  }
}

Snippet.propTypes = {
  imageSrc: React.PropTypes.string.isRequired,
  summary: React.PropTypes.string.isRequired,
  details: React.PropTypes.string.isRequired
};

export default Snippet;
