import axios from 'axios';

axios.defaults.baseURL = 'https://api.imgflip.com';
// axios.defaults.headers.post['Content-Type'] = `multipart/form-data; boundary=${form._boundary}`;

let gMemes = [];

async function getMemes() {
    const res = await axios.get('/get_memes');
    let resMemes = res.data.data.memes;
    gMemes = resMemes;
    return resMemes;
}

async function getMemeById(id) {
    try {
        if (!gMemes.length) await getMemes();
        const memeById = await gMemes.find(meme => meme.id === id);
        return memeById;
    }
    catch(e){
        console.log(e)
    }
}

async function postMeme(memeData) {  
    console.log(memeData);
    console.log(memeData.font);
    
    const form = new FormData();
    form.append('template_id', memeData.currMeme.id);
    form.append('username', process.env.REACT_APP_MEME_IMGFLIP_USERNAME);
    form.append('password', process.env.REACT_APP_MEME_IMGFLIP_PASSWORD);
    form.append('max_font_size','50');
    form.append('font', memeData.font);
    form.append('boxes[0][text]', memeData.text1);
    // form.append('boxes[0][font]', memeData.font);
    form.append('boxes[0][x]', '8');
    form.append('boxes[0][y]', '8');
    form.append('boxes[0][width]', '548');
    form.append('boxes[0][height]', '100');
    form.append('boxes[0][color]', memeData.color1);
    form.append('boxes[0][outline_color]', memeData.stroke1);
    form.append('boxes[1][text]', memeData.text2);
    // form.append('boxes[1][font]', memeData.font);
    form.append('boxes[1][x]', '8');
    form.append('boxes[1][y]', '349');
    form.append('boxes[1][width]', '300');
    form.append('boxes[1][height]', '100');
    form.append('boxes[1][color]', memeData.color2);
    form.append('boxes[1][outline_color]', memeData.stroke2);
   

    try{
        const response = await axios({
            method: 'post',
            url: `/caption_image`,
            data: form,
            headers: {
                'content-type': `multipart/form-data; boundary=${form._boundary}`,
            },
        });
        return response.data.data.url;
    } 
    catch(e) {
        console.error(e);
    } 
}

export default {
    getMemes,
    getMemeById,
    postMeme
}