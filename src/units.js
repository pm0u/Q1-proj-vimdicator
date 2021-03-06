let unit1 = {
  name: 'Basic Movement',
  lessons: [{
      name: 'Moving right - l',
      cRow: 0,
      cCol: 0,
      furthestCol: 0,
      finishCond: {
        cCol: 47,
        cRow: 0
      },
      finished: false,
      lessonText: [
        'Move the cursor to the end of the line using "l"'
      ],
      keyHandler(event) {
        if (event.key === 'l') {
          unit1.cursorMove(event.key)
        }
      },
      initKeys() {
        document.addEventListener('keydown', this.keyHandler)
      },
      killKeys() {
        document.removeEventListener('keydown', this.keyHandler)
      },
      hints: '<h4>Movement in Vim</h4><p>An important and unique feature of vim to understand is <a href="https://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes" target="_blank">modes</a>. Vim will always open in <span class="mode">NORMAL</span> mode. Normal mode is for movement and manipulation of text. Movement is controlled by the <span class="key">h j k</span> and <span class="key">l</span> keys. Think of these like arrow keys. The <span class="key">l</span> key will move the cursor to the right. Note that the cursor will not wrap to the next line when you reach the end. The numbers at the bottom of the text area represent the current row and column of the cursor and they will change as it moves. Try it out!</p><details><summary>Additional Hints</summary><p> Press the <span class="key">l</span> key repeatedly (or hold) to move the cursor to the end of the line to complete the lesson</p></details><details><summary>Additional Resources</summary><p><a href="https://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes" target="_blank">Vim modes from Learning the Vi Editor</a></p></details>',
      changes: [{
        cRow: 0,
        cCol: 0,
        furthestCol: 0,
        finished: false,
        lessonText: [
          'Move the cursor to the end of the line using "l"'
        ]
      }]
    },
    {
      name: 'Moving Left - h',
      cRow: 0,
      cCol: 49,
      furthestCol: 49,
      finishCond: {
        cCol: 0,
        cRow: 0
      },
      finished: false,
      lessonText: [
        'Move cursor to the beginning of the line using "h"'
      ],
      keyHandler(event) {
        if (event.key === 'h' || event.key === 'l') {
          unit1.cursorMove(event.key)
        }
      },
      initKeys() {
        document.addEventListener('keydown', this.keyHandler)
      },
      killKeys() {
        document.removeEventListener('keydown', this.keyHandler)
      },
      hints: '<h4>Move to the left</h4><p>The <span class="key">h</span> key will move the cursor to the left, give it a shot! (the <span class="key">l</span> key will still work if you\'d like to mess around)<details><summary>Additional Hints</summary><p> Press the <span class="key">h</span> key repeatedly (or hold) to move the cursor to the beginning of the line to complete the lesson</p></details>',
      changes: [{
        cRow: 0,
        cCol: 49,
        furthestCol: 49,
        finished: false,
        lessonText: [
          'Move cursor to the beginning of the line using "h"'
        ]
      }],
    },
    {
      name: 'Moving Up and Down - j/k',
      cRow: 1,
      cCol: 10,
      furthestCol: 10,
      finishCond: {
        cRow: [0, 3],
        cCol: 0
      },
      finished: false,
      lessonText: [
        'This is a line of text',
        'Put the cursor on this period.',
        'move to this line with j',
        'and then j again to this line.'
      ],
      keyHandler(event) {
        if (event.key.match(/[hjkl]/)) {
          unit1.cursorMove(event.key)
        }
      },
      initKeys() {
        document.addEventListener('keydown', this.keyHandler)
      },
      killKeys() {
        document.removeEventListener('keydown', this.keyHandler)
      },
      hints: '<h4>Moving up and Down</h4><p>The <span class="key">j</span> & <span class="key">k</span> keys act as down and up arrow keys respectively. There are a couple interesting functionalities -- the cursor column is preserved when moving from a long line past a short line to another long line. In this example, if the cursor is on the period in line 2 and you move down two lines, you will land on the period again. You\'ll also notice that the cursor lands on the last character of the shorter line inbetween. This makes a lot of sense when bouncing between repeated lines to edit the same details.<details><summary>Additional Hints</summary><p>The <span class="key">h</span>, <span class="key">j</span>, <span class="key">k</span>, and <span class="key">l</span> keys will all work in this lesson. Try them all out! complete the lesson by moving to the first character of either the first or last line.</p></details>',
      changes: [{
        cRow: 1,
        cCol: 10,
        furthestCol: 10,
        finished: false,
        lessonText: [
          'This is a line of text',
          'Put the cursor on this period.',
          'move to this line with j',
          'and then j again to this line.'
        ],
      }]
    },
    {
      name: 'Start and end of line - ^ $ 0',
      cRow: 1,
      cCol: 20,
      furthestCol: 20,
      finishCond: {
        cRow: 0,
        cCol: 42
      },
      finished: false,
      lessonText: [
        'Move to end of this line to end the lesson.',
        '  try a ^ and 0 on this line',
        'and this line to see the difference',
      ],
      keyHandler(event) {
        if (event.key.match(/[jk$^0]/)) {
          unit1.cursorMove(event.key)
        }
      },
      initKeys() {
        document.addEventListener('keydown', this.keyHandler)
      },
      killKeys() {
        document.removeEventListener('keydown', this.keyHandler)
      },
      hints: '<h4>Moving to End and Start of Line</h4><p>The <span class="key">^</span>, <span class="key">0</span>, <span class="key">$</span> move within the current line. <span class="key">0 </span> moves to the first character of the line. <span class="key">^</span> will move to the first non-empty character (useful for indented code). <span class="key">$</span> will move to the end of the current line.<details><summary>Additional Hints</summary><p>The <span class="key">j</span> & <span class="key">k</span> keys will work in this lesson to change lines. Complete the lesson by moving to the last character of the first line.</p></details>',
      changes: [{
        cRow: 1,
        cCol: 20,
        furthestCol: 20,
        finished: false,
        lessonText: [
          'Move to end of this line to end the lesson.',
          '  try a ^ and 0 on this line',
          'and this line to see the difference',
        ],
      }]
    },
    {
      name: 'Forward and backward by word separators w/W b/B e/E',
      cRow: 1,
      cCol: 20,
      furthestCol: 20,
      finishCond: {
        cRow: 0,
        cCol: 42
      },
      finished: false,
      lessonText: [
        'Move to end of this line to end the lesson.',
        'try moving around on this line',
        'and.this.line to.see.the difference',
      ],
      keyHandler(event) {
        if (event.key.match(/[jkbBwWeE]/)) {
          unit1.cursorMove(event.key)
        }
      },
      initKeys() {
        document.addEventListener('keydown', this.keyHandler)
      },
      killKeys() {
        document.removeEventListener('keydown', this.keyHandler)
      },
      hints: '<h4>Moving to End and Startd of Line</h4><p>The <span class="key">j</span> & <span class="key">k</span> keys act as down and up arrow keys respectively. There are a couple interesting functionalities -- the cursor column is preserved when moving from a long line past a short line to another long line. In this example, if the cursor is on the period in line 2 and you move down two lines, you will land on the period again. You\'ll also notice that the cursor lands on the last character of the shorter line inbetween. This makes a lot of sense when bouncing between repeated lines to edit the same details.<details><summary>Additional Hints</summary><p>The <span class="key">h</span>, <span class="key">j</span>, <span class="key">k</span>, and <span class="key">l</span> keys will all work in this lesson. Try them all out! complete the lesson by moving to the first character of either the first or last line.</p></details>',
      changes: [{
        cRow: 1,
        cCol: 20,
        furthestCol: 20,
        finished: false,
        lessonText: [
          'Move to end of this line to end the lesson.',
          '  try a ^ and 0 on this line',
          'and this line to see the difference',
        ],
      }]
    }
  ],
  currLesson: 0,
  genHTML(lessonNum = 0) {
    let lesson = this.lessons[lessonNum]
    let spanPreLineNo = '<span class="line-no">'
    let spanPre = '<span class="mode-normal-cursor">'
    let spanPost = '</span>'
    let newText = []
    for (let i in lesson.lessonText) {
      if (i == lesson.cRow) {
        newText.push(`${lesson.lessonText[lesson.cRow].substring(0,lesson.cCol)}${spanPre}${lesson.lessonText[lesson.cRow].charAt(lesson.cCol)}${spanPost}${lesson.lessonText[lesson.cRow].substring(lesson.cCol+1)}`)
      } else {
        newText.push(lesson.lessonText[i])
      }
    }
    this.addLineNos(newText)
    return newText.join('<br>')
  },
  recursiveUpdater(object, storageObj) {
    let newObj = object
    for (let i in storageObj) {
      if (typeof storageObj[i] === 'object' || typeof storageObj[i] === 'array') {
        newObj[i] = this.recursiveUpdater(newObj[i], storageObj[i])
      } else {
        newObj[i] = storageObj[i]
      }
    }
    return newObj
  },
  finisher() {
    let currLessonForProps = this.lessons[this.currLesson]
    let currFinishCond = currLessonForProps.finishCond
    for (let i in currFinishCond) {
      if ((typeof currFinishCond[i] === 'array' || typeof currFinishCond[i] === 'object') && (typeof currLessonForProps[i] !== 'array' || typeof currLessonForProps[i] !== 'object')) {
        if (!currFinishCond[i].includes(currLessonForProps[i])) {
          return false
        }
      } else {
        if (currFinishCond[i] !== currLessonForProps[i]) {
          return false
        }
      }
    }
    currLessonForProps.finished = true
    this.lessons[this.currLesson].killKeys()
    return true
  },
  saveToStorage(event) {
    event.preventDefault()
    let userTextBox = document.getElementById('user-name')
    let userName = userTextBox.value
    let vimStorage = window.localStorage
    vimStorage.setItem(userName, JSON.stringify(unit1))
    unit1.removePopUp()
  },
  promptForSave() {
    this.removePopUp()
    let promptHTML = document.createElement('div')
    promptHTML.className = 'pop-up-contents'

    let promptTitle = document.createElement('h3')
    promptTitle.innerText = 'Please enter a name to save progress'

    let saveForm = document.createElement('form')
    saveForm.id = 'saveForm'
    saveForm.addEventListener('submit', this.saveToStorage)

    let userTextBox = document.createElement('input')
    userTextBox.className = 'subtle-textbox'
    userTextBox.type = 'text'
    userTextBox.name = 'username'
    userTextBox.id = 'user-name'
    userTextBox.pattern = '\\w{3,}'
    userTextBox.title = 'Must be at least 3 characters. Combination of letters, numbers, and underscores.'
    userTextBox.placeholder = '<username>'

    let submitBtn = document.createElement('input')
    submitBtn.className = 'subtle-btn'
    submitBtn.type = 'submit'
    submitBtn.value = 'save'

    let cancelBtn = document.createElement('input')
    cancelBtn.className = 'subtle-btn'
    cancelBtn.type = 'button'
    cancelBtn.value = 'cancel'
    cancelBtn.addEventListener('click', unit1.initLesson)

    saveForm.appendChild(userTextBox)
    saveForm.appendChild(submitBtn)
    saveForm.appendChild(cancelBtn)

    promptHTML.appendChild(promptTitle)
    promptHTML.appendChild(saveForm)

    this.popUp(promptHTML)
  },
  updateFromStorage(event) {
    event.preventDefault()
    let userSelect = document.getElementById('user-select')
    let userSelectVal = userSelect.value
    let vimStorage = window.localStorage
    let unitRetrieved = JSON.parse(vimStorage[userSelectVal])
    unit1.recursiveUpdater(unit1, unitRetrieved)
    unit1.initLesson()
  },
  promptForUpdate() {
    this.removePopUp()
    let vimStorage = window.localStorage
    let promptHTML = document.createElement('div')
    promptHTML.className = 'pop-up-contents'

    let promptTitle = document.createElement('h3')
    promptTitle.innerText = 'Please choose a save to load'

    let loadForm = document.createElement('form')
    loadForm.id = 'loadForm'
    loadForm.addEventListener('submit', this.updateFromStorage)

    let submitBtn = document.createElement('input')
    submitBtn.className = 'subtle-btn'
    submitBtn.type = 'submit'
    submitBtn.value = 'load'

    let cancelBtn = document.createElement('input')
    cancelBtn.className = 'subtle-btn'
    cancelBtn.type = 'button'
    cancelBtn.value = 'cancel'
    cancelBtn.addEventListener('click', unit1.initLesson)

    let userSelect = document.createElement('select')
    userSelect.id = 'user-select'
    userSelect.className = 'subtle-drop'

    for (let i in vimStorage) {
      if (typeof vimStorage[i] === 'string') {
        let newOpt = document.createElement('option')
        newOpt.value = i
        newOpt.innerText = i
        userSelect.appendChild(newOpt)
      }
    }

    loadForm.appendChild(userSelect)
    loadForm.appendChild(submitBtn)
    loadForm.appendChild(cancelBtn)

    promptHTML.appendChild(promptTitle)
    promptHTML.appendChild(loadForm)

    this.popUp(promptHTML)

  },
  finishKeyListenerActive: false,
  cursorMove(key) {
    let activeLesson = unit1.lessons[this.currLesson]
    this.cursorMover(key)
    this.writeToTextArea(this.genHTML(this.currLesson))
    this.updateCursorPosDisplay(activeLesson.cRow, activeLesson.cCol)
    if (this.finisher()) {
      this.finishNotice()
    }
  },
  cursorMover(key) {
    let activeLesson = unit1.lessons[this.currLesson]
    switch (key) {
      case 'l':
        (activeLesson.cCol >= activeLesson.lessonText[activeLesson.cRow].length - 1) || activeLesson.cCol++
        activeLesson.furthestCol = activeLesson.cCol
        break
      case 'h':
        (activeLesson.cCol <= 0) || activeLesson.cCol--;
        activeLesson.furthestCol = activeLesson.cCol
        break
      case 'j':
        (activeLesson.cRow >= activeLesson.lessonText.length - 1) || activeLesson.cRow++
        if (activeLesson.furthestCol <= activeLesson.lessonText[activeLesson.cRow].length - 1) {
          activeLesson.cCol = activeLesson.furthestCol
        } else {
          activeLesson.cCol = activeLesson.lessonText[activeLesson.cRow].length - 1
        }
        break
      case 'k':
        (activeLesson.cRow === 0) || activeLesson.cRow--
        if (activeLesson.furthestCol <= activeLesson.lessonText[activeLesson.cRow].length - 1) {
          activeLesson.cCol = activeLesson.furthestCol
        } else {
          activeLesson.cCol = activeLesson.lessonText[activeLesson.cRow].length - 1
        }
        break
      case '$':
        activeLesson.cCol = activeLesson.lessonText[activeLesson.cRow].length - 1
        activeLesson.furthestCol = activeLesson.cCol
        break
      case '0':
        activeLesson.cCol = 0
        activeLesson.furthestCol = activeLesson.cCol
        break
      case '^':
        activeLesson.cCol = unit1.findFirstNonEmpty(activeLesson)
        activeLesson.furthestCol = activeLesson.cCol
        break
      case 'w':
        break
      case 'W':
        break
      case 'b':
        break
      case 'B':
        break
      case 'e':
        break
      case 'E':
        break

    }
  },
  findFirstNonEmpty(lesson) {
    let currLine = lesson.lessonText[lesson.cRow]
    return currLine.search(/\S/)

  },
  initLesson() {
    if (this.finishKeyListenerActive) {
      document.removeEventListener('keypress', unit1.finishNoticeKeyListener)
    }
    unit1.removePopUp()
    unit1.lessons[unit1.currLesson].initKeys()
    unit1.writeToTextArea(unit1.genHTML(unit1.currLesson))
    unit1.updateCursorPosDisplay(unit1.lessons[unit1.currLesson].cRow, unit1.lessons[unit1.currLesson].cCol)
    unit1.setHints()
  },
  changeCurrLesson(lessonNum) {
    this.currLesson = lessonNum
  },
  changeLesson(lessonNum) {
    let activeLesson = unit1.lessons[this.currLesson]
    activeLesson.killKeys()
    this.changeCurrLesson(lessonNum)
    this.initLesson()
  },
  nextLesson() {
    console.log(!!unit1.lessons[unit1.currLesson + 1])
    if (!!unit1.lessons[unit1.currLesson + 1]) {
      unit1.changeLesson(unit1.currLesson + 1)
    } else {
      unit1.initLesson()
    }
  },
  writeToTextArea(html) {
    let vimText = document.getElementById('vim-text')
    vimText.innerHTML = html
  },
  resetLesson(lessonNum = this.currLesson) {
    let currLessonForProps = this.lessons[lessonNum]
    let startState = currLessonForProps.changes[0]
    for (let i in startState) {
      currLessonForProps[i] = startState[i]
    }
    this.initLesson()
  },
  updateCursorPosDisplay(row, col) {
    let posDiv = document.getElementById('pos-div')
    posDiv.innerText = `${row+1},${col+1}`
  },
  setHints() {
    let hintsDiv = document.getElementById('hints-content')
    hintsDiv.innerHTML = unit1.lessons[this.currLesson].hints
  },
  finishNotice() {
    finishElement = document.createElement('div')
    finishElement.className = 'pop-up-contents'
    finishElement.innerHTML = '<h3>Lesson Complete!</h3><p>great job! press <span class=\'emph\'>r</span> to restart this lesson or <span class=\'emph\'>enter</span> to start the next lesson</p>'
    this.popUp(finishElement)
    this.finishKeyListenerActive = true
    document.addEventListener('keypress', unit1.finishNoticeKeyListener)
  },
  finishNoticeKeyListener(event) {
    switch (event.key) {
      case 'Enter':
        unit1.nextLesson()
        break
      case 'r':
        unit1.resetLesson()
        break
    }
  },
  popUp(element) {
    let popUpDiv = document.createElement('div')
    let vimContent = document.getElementById('vim-content')
    let vimBox = document.getElementById('vim-box')
    let vimText = document.getElementById('vim-text')
    vimContent.className = 'blur'
    popUpDiv.className = 'pop-up-div'
    popUpDiv.id = 'pop-up-div'
    popUpDiv.appendChild(element)
    vimBox.appendChild(popUpDiv)
    if (vimText.innerText.match('.+')) {
      unit1.lessons[this.currLesson].killKeys()
    }
  },
  removePopUp() {
    let vimContent = document.getElementById('vim-content')
    let vimText = document.getElementById('vim-text')
    let vimBox = document.getElementById('vim-box')
    if (document.contains(document.getElementById('pop-up-div'))) {
      let finishDiv = document.getElementById('pop-up-div')
      finishDiv.parentNode.removeChild(finishDiv)
    }
    if (vimContent.classList.contains('blur')) {
      vimContent.classList.remove('blur')
    }
  },
  addLineNos(text) {
    let spanPre = '<span class="line-no">'
    let spanPost = '</span>'
    let lineNosDiv = document.getElementById('line-nos')
    let newText = []

    for (let i = 0; i < text.length; i++) {
      newText.push(`${spanPre}${i+1}${spanPost}`)
    }
    lineNosDiv.innerHTML = newText.join('<br>')
  }
}
