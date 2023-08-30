const User = require("./model")
const util = require("../../../helpers/util")
const toast = require("./message.json")

exports.index = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).select("-password")

        if (user) {
            return res.send(util.apiResponse(1, toast.USER_LISTED, user))
        }
        else {
            return res.status(404).send(util.apiResponse(0, toast.USER_NOT_FOUND))
        }
    }
    catch (err) {
        return res.status(500).send(util.apiResponse(0, err.message))
    }
}