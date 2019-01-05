var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var drumBank = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Snare',
  url: 'http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3' },
{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Bass Drum',
  url: 'http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_ElecK01-Kick02.mp3' },
{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Cymbal',
  url: 'http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_Crash-03.mp3' },
{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Tom-Toms',
  url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Low%20Tom-21882-Free-Loops.com.mp3' },
{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Cowbell',
  url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Cowbell%20One%20Shot.wav-18618-Free-Loops.com.mp3' },
{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Tambourine',
  url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Native%20American-6093-Free-Loops.com.mp3' },
{
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Chimes',
  url: 'http://www.gravomaster.com/alarm/sounds/chime-high.mp3' },
{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Timpani',
  url: 'http://s1download-universal-soundbank.com/mp3/sounds/19452.mp3' },
{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Triangle',
  url: 'http://s1download-universal-soundbank.com/mp3/sounds/21226.mp3' }];


var chordBank = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Aluminum',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/215[kb]aluminum-reflector-bell.wav.mp3' },
{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Analog Delay Hit',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/301[kb]analogdelayhit.aif.mp3' },
{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Bubble',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/40[kb]analogue_bubble.aif.mp3' },
{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Barkingtom',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/8[kb]barkingtom.aif.mp3' },
{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Bip',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/11[kb]bip.wav.mp3' },
{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Biting Celery',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/23[kb]biting-celery.aif.mp3' },
{
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Bottle Breath',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/13[kb]bottlebreath.aif.mp3' },
{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Clonk',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/53[kb]clonk.aif.mp3' },
{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Gronk',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/59[kb]gronk.aif.mp3' }];var


EachButton = function (_React$Component) {_inherits(EachButton, _React$Component);
  function EachButton(props) {_classCallCheck(this, EachButton);var _this = _possibleConstructorReturn(this, (EachButton.__proto__ || Object.getPrototypeOf(EachButton)).call(this,
    props));
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.playSound = _this.playSound.bind(_this);return _this;
  }_createClass(EachButton, [{ key: 'componentDidMount', value: function componentDidMount()
    {
      document.addEventListener("keydown", this.handleKeyPress);
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {
      document.removeEventListener("keydown", this.handleKeyPress);
    } }, { key: 'handleClick', value: function handleClick()
    {
      this.props.updateDisplay(this.props.id);
      this.playSound();
    } }, { key: 'handleKeyPress', value: function handleKeyPress(
    e) {
      var code = e.keyCode || e.which;
      if (code === this.props.keyCode) {
        var drumId = this.props.bank.filter(function (x) {return x.keyCode === code;});
        this.props.updateDisplay(drumId[0].id);
        this.playSound();
      }
    } }, { key: 'playSound', value: function playSound(
    e) {
      var sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.volume = this.props.volLevel;
      if (this.props.power) {
        sound.play();
      }
    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'drum-pad',
            id: this.props.id,
            onKeyDown: this.handleKeyPress,
            onClick: this.handleClick,
            bank: this.props.bank },
          React.createElement('audio', {
            className: 'clip',
            id: this.props.keyTrigger,
            src: this.props.clip }),
          this.props.keyTrigger));


    } }]);return EachButton;}(React.Component);var


AllButtons = function (_React$Component2) {_inherits(AllButtons, _React$Component2);
  function AllButtons(props) {_classCallCheck(this, AllButtons);return _possibleConstructorReturn(this, (AllButtons.__proto__ || Object.getPrototypeOf(AllButtons)).call(this,
    props));
  }_createClass(AllButtons, [{ key: 'render', value: function render()

    {var _this3 = this;
      var padBank = void 0;
      padBank = this.props.bank.map(function (i) {
        return (
          React.createElement(EachButton, {
            id: i.id,
            keyCode: i.keyCode,
            keyTrigger: i.keyTrigger,
            clip: i.url,
            bank: _this3.props.bank,
            updateDisplay: _this3.props.updateDisplay,
            playSound: _this3.props.playSound,
            volLevel: _this3.props.volLevel,
            power: _this3.props.power }));

      });
      return (
        React.createElement('div', { id: 'drum-container' },
          padBank));


    } }]);return AllButtons;}(React.Component);var



App = function (_React$Component3) {_inherits(App, _React$Component3);
  function App(props) {_classCallCheck(this, App);var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this4.state = {
      display: '',
      power: true,
      volLevel: 0.5,
      bank: drumBank };

    _this4.updateDisplay = _this4.updateDisplay.bind(_this4);
    _this4.adjustVolume = _this4.adjustVolume.bind(_this4);
    _this4.powerToggle = _this4.powerToggle.bind(_this4);
    _this4.bankToggle = _this4.bankToggle.bind(_this4);return _this4;
  }_createClass(App, [{ key: 'updateDisplay', value: function updateDisplay(

    id) {
      this.setState({
        display: this.state.power ? id : '' });

    } }, { key: 'adjustVolume', value: function adjustVolume(

    e) {
      var slider = document.getElementById("volRange");
      this.setState({
        volLevel: slider.value / 100 });

    } }, { key: 'powerToggle', value: function powerToggle()
    {
      this.setState({
        display: '',
        power: !this.state.power });

    } }, { key: 'bankToggle', value: function bankToggle()
    {
      this.setState({
        display: '',
        bank: this.state.bank == drumBank ? chordBank : drumBank });

    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'drum-machine' },
          React.createElement(AllButtons, {
            updateDisplay: this.updateDisplay,
            playSound: this.playSound,
            bank: this.state.bank,
            volLevel: this.state.volLevel,
            power: this.state.power }),
          React.createElement('div', { id: 'controls' },
            React.createElement('div', { id: 'power' },
              React.createElement('div', { id: 'text' }, 'Power'),
              React.createElement('div', { id: 'switch', onChange: this.powerToggle },
                React.createElement('label', null,
                  React.createElement('input', { type: 'checkbox' }),
                  React.createElement('span', { id: 'slider' }))),



              React.createElement('div', { id: 'text' }, 'Bank'),
              React.createElement('div', { id: 'switch', onChange: this.bankToggle },
                React.createElement('label', null,
                  React.createElement('input', { type: 'checkbox' }),
                  React.createElement('span', { id: 'slider' })))),



            React.createElement('div', { id: 'display' },
              React.createElement('p', null, this.state.display)),


            React.createElement('div', { className: 'slide-container' },
              React.createElement('input', { type: 'range', min: '1', max: '100', className: 'slider', id: 'volRange', onChange: this.adjustVolume })))));




    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));