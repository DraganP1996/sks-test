import { EventEffects } from './Event'
import { GroupsEffects } from './Group'
import { MarketEffects } from './Market'
import { MarketCategoryEffects } from './MarketCategory'
import { OddEffects } from './Odds'
import { SportEffects } from './Sport'
import { SubeventEffects } from './Subevent'


export const allEffects = [
    SportEffects,
    GroupsEffects,
    EventEffects,
    MarketEffects,
    MarketCategoryEffects,
    SubeventEffects,
    OddEffects
]