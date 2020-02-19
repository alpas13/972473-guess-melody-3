const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://drive.google.com/file/d/10qEkVZATObxZ911SQV4NlM_q1VBeaHF9/view?usp=sharing`,
      genre: `rock`,
    }, {
      src: `https://drive.google.com/file/d/1pVwmuU4AjXnocxJStlWC7dZvHsP1virQ/view?usp=sharing`,
      genre: `blues`,
    }, {
      src: `https://drive.google.com/file/d/1f13Hnw8oiKtujTDh-2CIbkRp2bSlX2wo/view?usp=sharing`,
      genre: `pop`,
    }, {
      src: `https://drive.google.com/file/d/12RcEZvtXZajw0PPuSOx4pg65GvMDIy06/view?usp=sharing`,
      genre: `rap`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Kurt Cobain`,
      src: `https://drive.google.com/file/d/10qEkVZATObxZ911SQV4NlM_q1VBeaHF9/view?usp=sharing`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Jameson`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }
];
