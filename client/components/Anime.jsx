import React from 'react'

class Anime extends React.Component {

    render() {
        const anime = this.props.anime
        return (
            <>
                {/* {anime.forEach(element => {
                    return (
                        <ul>
                            <li>{element.title}</li>
                        </ul>
                    )
                })
                } */}

                {anime.map(element => {
                    return (
                        <>
                            <p><a href={element.url}>{element.title}: Episodes {element.episodes}</a></p>
                            <img src={element.image_url} />
                        </>
                    )
                })}
            </>
        )
    }
}

export default Anime