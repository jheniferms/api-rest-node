import * as create  from "./create";
import * as getAll  from "./getAll";
import * as getById  from "./get";
import * as updateById  from "./update";
import * as deleteById  from "./delete";

export const CitiesController = {
    ...create,
    ...getAll,
    ...getById,
    ...updateById,
    ...deleteById,
};