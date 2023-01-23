import React, { Component } from "react"
import BotCollection from './BotCollection'
import BotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends Component {
    state = {
      botCollection: [],
      filteredCollection: [],
      botArmy: [],
      collectionVisible: true,
      botSpecs: {},
    }

    