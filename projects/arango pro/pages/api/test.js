import {test} from '../../apicomponent/test'

export default function handler(req,res) {
    res.status(200).json(test)
}