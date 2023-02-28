const ctrlWrapper = ctrl => {
    const func = async(reg, res, next) => {
        try {
            await ctrl(reg, res, next)
        }
        catch(error) {
            next(error)

        }
    }
    return func;
}

module.exports = ctrlWrapper;