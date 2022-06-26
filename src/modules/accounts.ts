import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import { ZERO_ADDRESS, integer } from '@protofire/subgraph-toolkit'
import { Account } from '../../generated/schema'
import { stats } from './lens'
import { profiles } from '../modules'

export namespace accounts {
  export function getOrCreateAccount(accountAddress: Bytes): Account {
    let accountId = accountAddress.toHexString()

    let account = Account.load(accountId)
    if (account == null) {
      account = new Account(accountId)
      account.address = accountAddress
      account.totalFollowings = integer.ZERO
      account.following = new Array<string>()
      account.profilesIds = new Array<string>()
      //account.save()

      // +1 amount of lens profiles
      let lensInfo = stats.getOrCreateLensInfo()
      lensInfo.totalAccounts = lensInfo.totalAccounts.plus(integer.ONE)
      lensInfo.save()
    }
    return account as Account
  }

  export function getListProfileOwned(account: Account, profileId: BigInt): Array<string> {
    let newListProfiles = account.profilesIds
    newListProfiles.push(profileId.toString())
    account.profilesIds = newListProfiles

    return newListProfiles
  }
}
