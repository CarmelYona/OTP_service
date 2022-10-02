const firestoreActionsService = require('../../src/services/firestoreActions.service')

module.exports = {
  add,
  check
}

const collectionName = 'otp'

async function check(docId) {
  let isValid
  const currTimestamp = new Date().getTime()

  try {
    const res = await firestoreActionsService.getDocument(docId, collectionName)

    if (res.exists) {
      const otp = res.data()
      otp.expireTimestamp = new Date(otp.expireTimestamp.toDate()).getTime()

      if ((otp.expireTimestamp + 120000) > currTimestamp) {
        console.log('otp.expireTimestamp: Valid!', otp.expireTimestamp)
        isValid = true
      } else {
        console.log('otp.expireTimestamp: Expired!', otp.expireTimestamp)
        isValid = false
      }

      await firestoreActionsService.deleteDocument(docId, collectionName)
      return isValid
    } else {
      return false
    }

  } catch (error) {
    throw new Error(`Error adding log, desc: ${error}`)
  }
}

async function add() {
  const otp = {
    expireTimestamp: new Date()
  }

  try {
    const { id } = await firestoreActionsService.addDocument(otp, collectionName)
    return id
  } catch (error) {
    console.log(error)
    throw new Error(`Error adding log, desc: ${error}`)
  }
}

