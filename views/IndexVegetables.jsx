const React = require('react');

    class IndexVegetables extends React.Component {
      render() {
          const { vegetables } = this.props;
          console.log(vegetables)
          return (
                  <div>
                      <h1>Food Index Page</h1>
                      <ul>
                        {vegetables.name}
                          {vegetables.map((vegetables, i) => {
                              return (
                                  <li>
                                      The{' '}
                                      <a href={`/vegetables/${i}`}>
                                          {vegetables.name}
                                      </a>{' '}
                                      is {vegetables.color} <br></br>
                                      {vegetables.readyToEat
                                          ? `. It is ready to eat`
                                          : `. It is not ready to eat`}
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }
    module.exports = IndexVegetables