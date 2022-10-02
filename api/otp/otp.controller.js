const otpService = require('./otp.service')

module.exports = {
  createOtp,
  checkOtp,
  test
}

async function test(req, res) {
  console.log('Starting test:', new Date().toTimeString())
  const docId = await createOtp(req, res)
  const newReq = {
    body: { docId }
  }
  if (docId) {
    setTimeout(async () => {
      const isValid = await checkOtp(newReq, res)
      res.send(isValid)
      console.log('------------result------------')
      console.log(docId, ' is valid? ', isValid)
    }, 130000)
  }
}

async function checkOtp(req, res) {
  const { docId } = req.body
  try {
    const isValid = await otpService.check(docId)
    res.send(isValid)
    // return isValid
    //for testing use return, not res.send
  } catch (err) {
    console.log(err)
  }
}

async function createOtp(req, res) {
  try {
    const id = await otpService.add()
    res.send(id)
    // return id
    //for testing use return, not res.send
  } catch (err) {
    console.log(err)
  }
}