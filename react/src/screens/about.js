import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import IronImage from '../components/ironimage'
import Computer from '../images/pixabay/computer-1245714_1920.jpg'
import ComputerPre from '../images/pixabay/computer-1245714_small.jpg'
import PageHead from '../components/page-head'

class About extends Component {
  render () {
    const { translate } = this.props


    return (
      <div>
        <PageHead
          title="Arnoldson.online - Welcome"
          description="Portfolio site for Håkan Kindström Arnoldson, full-stack developer"
        />
        <div style={{position: 'fixed', top: '0', left: '0', bottom: '0', right: '0', width: '100wv', height: '100vh', zIndex: '-2'}}>
          <IronImage srcPreload={ComputerPre} srcLoaded={Computer} darken={0} />
        </div>
        <main className={'ScreenWrapper AboutScreenWrapper'}>
          about<br />
          <h1>add some content vertical scroll/hotnav interference test</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum nibh eget lacus rutrum, et mollis tellus bibendum. In rutrum urna nec tortor elementum lacinia. Fusce dui orci, gravida at purus a, gravida cursus urna. Aenean consequat turpis quis pharetra tincidunt. Nullam pulvinar felis nec massa gravida auctor. Donec suscipit, ante in bibendum vulputate, ipsum metus iaculis erat, id accumsan metus metus a risus. Vivamus aliquam tincidunt mi nec interdum. Etiam ut euismod augue. Integer dictum felis lacinia, faucibus tortor a, venenatis ante. Praesent ut dapibus est. Integer vulputate vel quam sit amet consectetur. Aenean vulputate velit vitae semper interdum. Sed porttitor ut tellus vitae dictum.
          </p><p>Nunc in purus feugiat, porta est nec, egestas diam. Sed ultricies rutrum metus, vitae convallis augue rhoncus vitae. Sed vitae risus quis ante vulputate pellentesque at sit amet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi et lobortis erat. Aliquam vitae eros consequat, auctor nisl in, laoreet velit. Ut dapibus risus sapien, eu imperdiet neque cursus eu. Phasellus suscipit elit sapien, pretium mattis enim gravida sed. In dictum pulvinar dui, id pulvinar tortor interdum vitae. Nunc varius a mi quis molestie. Cras eu placerat enim. Aenean sed ligula et justo finibus ullamcorper.
          </p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Nunc cursus ligula odio, sed accumsan dui blandit luctus. Suspendisse ut pellentesque lacus. Nulla eget feugiat mi, in pellentesque tellus. Praesent suscipit sollicitudin ullamcorper. Curabitur finibus a erat ac lacinia. Nulla commodo enim id orci tempor ornare. Quisque nisi mi, porta sit amet lacinia feugiat, aliquet tincidunt velit. Donec sapien mauris, placerat at eros eu, tristique molestie ante. Maecenas nec ipsum eu augue dignissim posuere vulputate eu felis. Curabitur tempor pulvinar elit a venenatis. Morbi placerat nunc sapien.
          </p><p>Suspendisse malesuada in erat eu fringilla. Nunc ut quam at turpis rhoncus ornare. Quisque vulputate iaculis velit vitae vulputate. Donec lacus libero, eleifend ut est non, eleifend efficitur ligula. Nulla aliquam tellus sit amet turpis efficitur, eu rutrum massa malesuada. Curabitur orci arcu, egestas ut mattis ut, vulputate et massa. Fusce iaculis, arcu quis cursus laoreet, velit mi aliquet augue, at semper velit ligula et augue. Integer venenatis mauris odio, id fermentum tellus tristique quis. Vivamus turpis magna, iaculis eu consectetur sit amet, venenatis et felis. Fusce lacus ipsum, egestas ac lectus in, gravida fermentum leo. Fusce leo est, egestas at efficitur vitae, malesuada sed nibh. Pellentesque vitae est molestie, aliquet urna eget, gravida massa. Pellentesque eleifend massa sit amet dolor cursus, non viverra ipsum fringilla. Integer vulputate tellus sed luctus sollicitudin.
          </p><p>Quisque sit amet diam sollicitudin, ullamcorper arcu quis, vestibulum nisl. Proin id ultricies arcu, quis aliquam turpis. Suspendisse egestas nulla a facilisis aliquam. In commodo, ante vel auctor consectetur, est magna dapibus justo, ac consectetur odio nunc non justo. Cras vel imperdiet eros. Suspendisse tincidunt sollicitudin nulla nec faucibus. Aenean aliquam viverra mi nec volutpat. Sed hendrerit porttitor accumsan. Proin mollis libero nec nisl eleifend finibus. Ut id placerat diam, ultricies convallis velit. Integer feugiat nulla vel felis malesuada interdum. Nullam tincidunt, tortor quis fringilla imperdiet, sem ex lobortis felis, eu aliquet sem nulla eget magna. Nam commodo, ipsum quis porta sollicitudin, neque leo finibus dui, quis interdum turpis urna hendrerit eros. In ultricies vitae ante a interdum. Nunc finibus velit hendrerit lacinia elementum. Integer vulputate nisi vel semper accumsan.
          </p><p>Mauris at ex ut ex posuere dictum. Cras diam nisi, posuere sed mi nec, varius feugiat justo. Nunc accumsan augue urna, fringilla lacinia ipsum congue eu. Aliquam et tortor quis mi porttitor finibus sed vitae sem. Vivamus id maximus ex. Mauris tincidunt dictum lacus, vitae facilisis mauris semper vel. Sed purus odio, lacinia in ultrices sit amet, bibendum a lorem. Aliquam neque ante, maximus quis ornare quis, dignissim eget diam. Sed tempor consequat lorem a tempor. Sed aliquet diam et orci commodo porttitor.
          </p><p>Suspendisse quis mi ligula. Nunc pharetra nisl ut consectetur aliquet. Proin placerat et velit eget congue. Morbi vel suscipit enim. Nunc iaculis et lorem et ornare. Vestibulum sollicitudin lacus ante, id finibus ex dapibus eu. Vivamus eget efficitur dolor, sit amet vulputate nibh.
          </p><p>In a nisi leo. Aenean euismod enim rhoncus mattis ullamcorper. In a lacus maximus, hendrerit neque eu, tincidunt mauris. Integer id turpis eget ipsum mollis molestie a non ipsum. Duis pellentesque arcu non auctor dapibus. Fusce imperdiet blandit nisl, sed feugiat ligula rutrum quis. Quisque ligula massa, vehicula a volutpat quis, finibus nec eros.
          </p><p>Nunc pretium turpis mi. Ut sit amet molestie nibh. Duis non pretium risus. Nam finibus blandit sollicitudin. Proin blandit sagittis quam, at tempor purus. Duis mattis volutpat diam, eu tincidunt dolor malesuada eu. Donec ut tincidunt purus. Nullam placerat aliquet neque scelerisque sagittis. Ut augue quam, varius faucibus tincidunt quis, pellentesque eu sem. Donec dui purus, consectetur vel lectus non, rutrum efficitur ipsum. In vestibulum, nisi eget elementum tristique, orci magna laoreet ex, in sagittis eros erat sed metus.
          </p><p>Sed nulla sem, faucibus a enim aliquet, mollis pellentesque neque. Aenean nisl purus, facilisis at facilisis vel, iaculis in nunc. Quisque sit amet mauris sed mauris dignissim egestas eget a purus. Cras eu aliquam eros, at interdum orci. Nam volutpat in tortor ut elementum. Donec nec est tortor. Mauris faucibus nunc nec libero pulvinar, id pretium tellus molestie. Aliquam quis leo ultricies dui facilisis rhoncus commodo vel lectus. Vestibulum consectetur commodo velit, quis sodales diam viverra eu. In ut lectus maximus, pretium eros et, facilisis tellus. Quisque sed feugiat turpis. Nulla ultricies nunc nec nibh fermentum, laoreet volutpat nunc condimentum. Vestibulum eget neque sed risus rutrum ullamcorper sit amet ut dolor. Phasellus non luctus mi, nec feugiat sem. Ut finibus, neque ut tincidunt consequat, leo metus lacinia purus, id eleifend elit augue quis urna.
          </p>
        </main>
      </div>
    )
  }
}

About.propTypes = {
  translate: PropTypes.func,
  showAnimation: PropTypes.bool
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  showAnimation: state.animations.main
})

export default connect(mapStateToProps, null)(About)
