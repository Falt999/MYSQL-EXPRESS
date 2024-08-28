
const getGoals = (req, res) => {
    res.status(200).json({
        message: "Get Goals"
    })
}
const setGoals = (req, res) => {
    res.status(200).json({
        message: "Set Goals"
    })
}
const putGoals = (req, res) => {
    res.status(200).json({
      message: "putGoals"
    })
  }
  
module.exports = {
    getGoals,
    setGoals,
    putGoals
}