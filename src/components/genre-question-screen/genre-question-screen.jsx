import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import GameType from "../../const";


class GenreQuestionScreen extends PureComponent {

  render() {
    const {
      onAnswer,
      onChange,
      question,
      renderPlayer,
      userAnswers,
    } = this.props;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}>
          {answers.map((answer, i) => {
            return (
              <div key={`${i}-${answer.src}`} className="track">
                {renderPlayer(answer.src, i)}
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`}
                    id={`answer-${i}`}
                    checked={userAnswers[i]}
                    onChange={(evt) => {
                      const value = evt.target.checked;

                      this.setState({answers: [...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)]});
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            );
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
  }),
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default GenreQuestionScreen;
