const ItemsUrl = "/js/items.json";

export class WebService {
    constructor() {}
    getItems = () => fetch(ItemsUrl)
        .then(response => {
            if (!response.ok)
                throw response
            return response.json()
        });
}