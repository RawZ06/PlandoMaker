import gossip_list from './gossip_list'

const hints = {};

for(const id in gossip_list)
{
    hints[gossip_list[id]] = ""
}

export default hints;
