import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import {CardMedia, Divider} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'

const Team = () => {
  const theme = useTheme()
  const assetAPIURL = 'https://api.digit.mn'

  const users = [
    {
    'id': 8,
    '_id': {'type': 'Buffer', 'data': [97, 12, 251, 151, 239, 128, 186, 2, 101, 85, 105, 82]},
    'username': 'otgonbayar',
    'email': 'otgonbayar@digit.mn',
    'provider': 'local',
    'confirmed': true,
    'blocked': false,
    'role': {
      'id': 1,
      'name': 'Authenticated',
      'description': 'Default role given to authenticated user.',
      'type': 'authenticated'
    },
    'created_at': '2021-08-06T09:06:32.000Z',
    'updated_at': '2021-11-10T02:20:03.000Z',
    'usertype': {
      'id': 3,
      'name': 'Ажилтан',
      'published_at': '2021-10-16T08:49:22.000Z',
      'created_at': '2021-10-16T00:49:22.000Z',
      'updated_at': '2021-10-16T00:49:22.000Z'
    },
    'company': {
      'id': 316,
      '_id': {'type': 'Buffer', 'data': [97, 13, 12, 165, 190, 144, 158, 6, 78, 27, 53, 48]},
      'name': 'Дийг Ай Ти ХХК',
      'nameEng': 'Dig IT LLC',
      'register': '6693172',
      'description': 'Монгол улсын дижитал шилжилтийг хурдасгах, дотоодын дижитал шийдэл нийлүүлэгч компаниудыг дэлхийд танилцуулах зорилготой "Дийг Ай Ти" ХХК нь 2021 оны 4 сард байгуулагдсан. Дийг Ай Ти ХХК нь Дижитал шийдлийн цогц мэдээлэл, тэргүүлэх технологийн судалгааны Дижит платформыг үүсгэн хэрэглэгчдэд хүргэхээр хөгжүүлж байна. Дижитал бизнес, тэдний бүтээгдэхүүн, үйлчилгээг танилцуулах, хэрэглэгчдийн дуу хоолойг хүргэх, технологийн чиг хандлага, судалгаа, зөвлөгөө үйлчилгээний Дийг АЙ ХХК. ',
      'yearOfCompany': '2021',
      'directorName': 'М.Отгонбаяр',
      'directorPhone': '99055488',
      'slogan': 'Дижитал шилжилт болон ирээдүйг тэргүүлэгч – Leading Digital Transformation and Future',
      'web': 'https://digit.mn',
      'fb': 'https://www.facebook.com/dijit.mn',
      'twitter': null,
      'youtube': null,
      'phone': '99055488',
      'companyAddress': 'Хан-Уул дүүрэг Хонгор аппартмент 3 давхарт 303тоот',
      'industry': 11,
      'companyType': 1,
      'memberType': 3,
      'active': true,
      'viewNumber': 100,
      'verified': true,
      'mail': 'otgonbayar@digit.mn',
      'company_size': 1,
      'directoremail': null,
      'directorFB': null,
      'user': 2,
      'verifieddate': null,
      'direct': null,
      'strength': null,
      'likedin': null,
      'logo': {
        'id': 2654,
        '_id': null,
        'name': '206451696_2957773917793509_4326100180836544570_n.png',
        'alternativeText': '',
        'caption': '',
        'width': 360,
        'height': 360,
        'formats': {
          'thumbnail': {
            'name': 'thumbnail_206451696_2957773917793509_4326100180836544570_n.png',
            'hash': 'thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961',
            'ext': '.png',
            'mime': 'image/png',
            'width': 156,
            'height': 156,
            'size': 4.42,
            'path': null,
            'url': '/uploads/thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961.png'
          }
        },
        'hash': '206451696_2957773917793509_4326100180836544570_n_d572d88961',
        'ext': '.png',
        'mime': 'image/png',
        'size': 5.27,
        'url': '/uploads/206451696_2957773917793509_4326100180836544570_n_d572d88961.png',
        'previewUrl': null,
        'provider': 'local',
        'provider_metadata': null,
        'created_at': '2021-10-30T05:00:22.000Z',
        'updated_at': '2021-10-30T05:00:22.000Z'
      },
      'published_at': '2021-08-06T10:19:18.000Z',
      'created_at': '2021-08-06T10:19:18.000Z',
      'updated_at': '2021-10-30T05:00:24.000Z',
      '__v': 0,
      'direction': 16,
      'score': null,
      'count': null
    },
    'birthday': '1986-11-04',
    'phone': null,
    'companyname': null,
    'industry': {
      'id': 11,
      'name': 'Мэдээллийн технологи & Харилцаа холбоо',
      'nameEng': 'IT & Telecom',
      'sequence': 1,
      'published_at': '2021-10-16T08:40:14.000Z',
      'created_at': '2021-10-16T00:40:14.000Z',
      'updated_at': '2021-11-30T06:52:20.000Z'
    },
    'function': {
      'id': 20,
      'name': 'Стратеги & Төлөвлөлт',
      'nameEng': 'Strategy & Plan',
      'homepage': true,
      'sequence': 1,
      'published_at': '2021-10-16T08:59:16.000Z',
      'created_at': '2021-10-16T00:59:16.000Z',
      'updated_at': '2021-10-20T04:59:03.000Z',
      'old_id': '610ce4e090c41e0237525884'
    },
    'sex': 'female',
    'prof': null,
    'usertitle': {
      'id': 2,
      'name': 'Идэвхтэй хэрэглэгч',
      'published_at': '2021-10-16T08:49:01.000Z',
      'created_at': '2021-10-16T00:49:01.000Z',
      'updated_at': '2021-10-27T10:06:20.000Z'
    },
    'company_size': {
      'id': 1,
      'name': '1-5 ажилтантай',
      'sequence': 1,
      'published_at': '2021-10-16T08:52:24.000Z',
      'created_at': '2021-10-16T00:38:52.000Z',
      'updated_at': '2021-10-16T00:52:24.000Z'
    },
    'firstname': 'Отгонбаяр',
    'lastname': 'М. ',
    'homepage': true,
    'position': 'Үүсгэн байгуулагч, Гүйцэтгэх захирал',
    'sequence': 1,
    'profile': {
      'id': 1503,
      '_id': '6130a676d579322d398ed5ec',
      'name': 'Oki.jpg',
      'alternativeText': null,
      'caption': null,
      'width': 1721,
      'height': 2591,
      'formats': {
        'thumbnail': {
          'name': 'thumbnail_Oki.jpg',
          'hash': 'thumbnail_Oki_b7c32bb9bd',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 104,
          'height': 156,
          'size': 3.35,
          'path': null,
          'url': '/uploads/thumbnail_Oki_b7c32bb9bd.jpg'
        }
      },
      'hash': 'Oki_b7c32bb9bd',
      'ext': '.jpg',
      'mime': 'image/jpeg',
      'size': 732.05,
      'url': '/uploads/Oki_b7c32bb9bd.jpg',
      'previewUrl': null,
      'provider': 'local',
      'provider_metadata': null,
      'created_at': '2021-09-02T10:24:54.000Z',
      'updated_at': '2021-09-02T10:25:19.000Z'
    },
    'comments': []
  }, {
    'id': 4,
    '_id': {'type': 'Buffer', 'data': [97, 36, 220, 246, 212, 220, 145, 37, 73, 20, 241, 141]},
    'username': 'erkhemee.m@gmail.com',
    'email': 'erkhemee.m@gmail.com',
    'provider': 'local',
    'confirmed': true,
    'blocked': false,
    'role': {
      'id': 1,
      'name': 'Authenticated',
      'description': 'Default role given to authenticated user.',
      'type': 'authenticated'
    },
    'created_at': '2021-08-24T11:50:14.000Z',
    'updated_at': '2021-12-14T07:10:08.000Z',
    'usertype': {
      'id': 3,
      'name': 'Ажилтан',
      'published_at': '2021-10-16T08:49:22.000Z',
      'created_at': '2021-10-16T00:49:22.000Z',
      'updated_at': '2021-10-16T00:49:22.000Z'
    },
    'company': {
      'id': 316,
      '_id': {'type': 'Buffer', 'data': [97, 13, 12, 165, 190, 144, 158, 6, 78, 27, 53, 48]},
      'name': 'Дийг Ай Ти ХХК',
      'nameEng': 'Dig IT LLC',
      'register': '6693172',
      'description': 'Монгол улсын дижитал шилжилтийг хурдасгах, дотоодын дижитал шийдэл нийлүүлэгч компаниудыг дэлхийд танилцуулах зорилготой "Дийг Ай Ти" ХХК нь 2021 оны 4 сард байгуулагдсан. Дийг Ай Ти ХХК нь Дижитал шийдлийн цогц мэдээлэл, тэргүүлэх технологийн судалгааны Дижит платформыг үүсгэн хэрэглэгчдэд хүргэхээр хөгжүүлж байна. Дижитал бизнес, тэдний бүтээгдэхүүн, үйлчилгээг танилцуулах, хэрэглэгчдийн дуу хоолойг хүргэх, технологийн чиг хандлага, судалгаа, зөвлөгөө үйлчилгээний Дийг АЙ ХХК. ',
      'yearOfCompany': '2021',
      'directorName': 'М.Отгонбаяр',
      'directorPhone': '99055488',
      'slogan': 'Дижитал шилжилт болон ирээдүйг тэргүүлэгч – Leading Digital Transformation and Future',
      'web': 'https://digit.mn',
      'fb': 'https://www.facebook.com/dijit.mn',
      'twitter': null,
      'youtube': null,
      'phone': '99055488',
      'companyAddress': 'Хан-Уул дүүрэг Хонгор аппартмент 3 давхарт 303тоот',
      'industry': 11,
      'companyType': 1,
      'memberType': 3,
      'active': true,
      'viewNumber': 100,
      'verified': true,
      'mail': 'otgonbayar@digit.mn',
      'company_size': 1,
      'directoremail': null,
      'directorFB': null,
      'user': 2,
      'verifieddate': null,
      'direct': null,
      'strength': null,
      'likedin': null,
      'logo': {
        'id': 2654,
        '_id': null,
        'name': '206451696_2957773917793509_4326100180836544570_n.png',
        'alternativeText': '',
        'caption': '',
        'width': 360,
        'height': 360,
        'formats': {
          'thumbnail': {
            'name': 'thumbnail_206451696_2957773917793509_4326100180836544570_n.png',
            'hash': 'thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961',
            'ext': '.png',
            'mime': 'image/png',
            'width': 156,
            'height': 156,
            'size': 4.42,
            'path': null,
            'url': '/uploads/thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961.png'
          }
        },
        'hash': '206451696_2957773917793509_4326100180836544570_n_d572d88961',
        'ext': '.png',
        'mime': 'image/png',
        'size': 5.27,
        'url': '/uploads/206451696_2957773917793509_4326100180836544570_n_d572d88961.png',
        'previewUrl': null,
        'provider': 'local',
        'provider_metadata': null,
        'created_at': '2021-10-30T05:00:22.000Z',
        'updated_at': '2021-10-30T05:00:22.000Z'
      },
      'published_at': '2021-08-06T10:19:18.000Z',
      'created_at': '2021-08-06T10:19:18.000Z',
      'updated_at': '2021-10-30T05:00:24.000Z',
      '__v': 0,
      'direction': 16,
      'score': null,
      'count': null
    },
    'birthday': null,
    'phone': '99001122',
    'companyname': 'Дийг Ай Ти ХХК',
    'industry': {
      'id': 11,
      'name': 'Мэдээллийн технологи & Харилцаа холбоо',
      'nameEng': 'IT & Telecom',
      'sequence': 1,
      'published_at': '2021-10-16T08:40:14.000Z',
      'created_at': '2021-10-16T00:40:14.000Z',
      'updated_at': '2021-11-30T06:52:20.000Z'
    },
    'function': null,
    'sex': null,
    'prof': null,
    'usertitle': {
      'id': 3,
      'name': 'Мэргэжлийн хүн',
      'published_at': '2021-10-16T08:49:01.000Z',
      'created_at': '2021-10-16T00:49:01.000Z',
      'updated_at': '2021-10-27T10:06:51.000Z'
    },
    'company_size': {
      'id': 1,
      'name': '1-5 ажилтантай',
      'sequence': 1,
      'published_at': '2021-10-16T08:52:24.000Z',
      'created_at': '2021-10-16T00:38:52.000Z',
      'updated_at': '2021-10-16T00:52:24.000Z'
    },
    'firstname': 'Эрхэмбаатар',
    'lastname': 'М. ',
    'homepage': true,
    'position': 'Ахлах хөгжүүлэгч',
    'sequence': 2,
    'profile': {
      'id': 1504,
      '_id': '6130a91ed579322d398ed5f6',
      'name': 'Erhemee.jpg',
      'alternativeText': null,
      'caption': null,
      'width': 1881,
      'height': 2888,
      'formats': {
        'thumbnail': {
          'name': 'thumbnail_Erhemee.jpg',
          'hash': 'thumbnail_Erhemee_26ac1fa409',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 102,
          'height': 156,
          'size': 2.74,
          'path': null,
          'url': '/uploads/thumbnail_Erhemee_26ac1fa409.jpg'
        }
      },
      'hash': 'Erhemee_26ac1fa409',
      'ext': '.jpg',
      'mime': 'image/jpeg',
      'size': 813.57,
      'url': '/uploads/Erhemee_26ac1fa409.jpg',
      'previewUrl': null,
      'provider': 'local',
      'provider_metadata': null,
      'created_at': '2021-09-02T10:36:14.000Z',
      'updated_at': '2021-09-02T10:36:31.000Z'
    },
    'comments': []
  }, {
    'id': 5,
    '_id': {'type': 'Buffer', 'data': [97, 37, 250, 210, 35, 1, 122, 38, 57, 189, 236, 243]},
    'username': 'ochko2002',
    'email': 'ochko2002@gmail.com',
    'provider': 'local',
    'confirmed': true,
    'blocked': false,
    'role': {
      'id': 1,
      'name': 'Authenticated',
      'description': 'Default role given to authenticated user.',
      'type': 'authenticated'
    },
    'created_at': '2021-08-25T08:09:55.000Z',
    'updated_at': '2021-10-18T22:00:32.000Z',
    'usertype': {
      'id': 3,
      'name': 'Ажилтан',
      'published_at': '2021-10-16T08:49:22.000Z',
      'created_at': '2021-10-16T00:49:22.000Z',
      'updated_at': '2021-10-16T00:49:22.000Z'
    },
    'company': {
      'id': 316,
      '_id': {'type': 'Buffer', 'data': [97, 13, 12, 165, 190, 144, 158, 6, 78, 27, 53, 48]},
      'name': 'Дийг Ай Ти ХХК',
      'nameEng': 'Dig IT LLC',
      'register': '6693172',
      'description': 'Монгол улсын дижитал шилжилтийг хурдасгах, дотоодын дижитал шийдэл нийлүүлэгч компаниудыг дэлхийд танилцуулах зорилготой "Дийг Ай Ти" ХХК нь 2021 оны 4 сард байгуулагдсан. Дийг Ай Ти ХХК нь Дижитал шийдлийн цогц мэдээлэл, тэргүүлэх технологийн судалгааны Дижит платформыг үүсгэн хэрэглэгчдэд хүргэхээр хөгжүүлж байна. Дижитал бизнес, тэдний бүтээгдэхүүн, үйлчилгээг танилцуулах, хэрэглэгчдийн дуу хоолойг хүргэх, технологийн чиг хандлага, судалгаа, зөвлөгөө үйлчилгээний Дийг АЙ ХХК. ',
      'yearOfCompany': '2021',
      'directorName': 'М.Отгонбаяр',
      'directorPhone': '99055488',
      'slogan': 'Дижитал шилжилт болон ирээдүйг тэргүүлэгч – Leading Digital Transformation and Future',
      'web': 'https://digit.mn',
      'fb': 'https://www.facebook.com/dijit.mn',
      'twitter': null,
      'youtube': null,
      'phone': '99055488',
      'companyAddress': 'Хан-Уул дүүрэг Хонгор аппартмент 3 давхарт 303тоот',
      'industry': 11,
      'companyType': 1,
      'memberType': 3,
      'active': true,
      'viewNumber': 100,
      'verified': true,
      'mail': 'otgonbayar@digit.mn',
      'company_size': 1,
      'directoremail': null,
      'directorFB': null,
      'user': 2,
      'verifieddate': null,
      'direct': null,
      'strength': null,
      'likedin': null,
      'logo': {
        'id': 2654,
        '_id': null,
        'name': '206451696_2957773917793509_4326100180836544570_n.png',
        'alternativeText': '',
        'caption': '',
        'width': 360,
        'height': 360,
        'formats': {
          'thumbnail': {
            'name': 'thumbnail_206451696_2957773917793509_4326100180836544570_n.png',
            'hash': 'thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961',
            'ext': '.png',
            'mime': 'image/png',
            'width': 156,
            'height': 156,
            'size': 4.42,
            'path': null,
            'url': '/uploads/thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961.png'
          }
        },
        'hash': '206451696_2957773917793509_4326100180836544570_n_d572d88961',
        'ext': '.png',
        'mime': 'image/png',
        'size': 5.27,
        'url': '/uploads/206451696_2957773917793509_4326100180836544570_n_d572d88961.png',
        'previewUrl': null,
        'provider': 'local',
        'provider_metadata': null,
        'created_at': '2021-10-30T05:00:22.000Z',
        'updated_at': '2021-10-30T05:00:22.000Z'
      },
      'published_at': '2021-08-06T10:19:18.000Z',
      'created_at': '2021-08-06T10:19:18.000Z',
      'updated_at': '2021-10-30T05:00:24.000Z',
      '__v': 0,
      'direction': 16,
      'score': null,
      'count': null
    },
    'birthday': null,
    'phone': null,
    'companyname': null,
    'industry': {
      'id': 11,
      'name': 'Мэдээллийн технологи & Харилцаа холбоо',
      'nameEng': 'IT & Telecom',
      'sequence': 1,
      'published_at': '2021-10-16T08:40:14.000Z',
      'created_at': '2021-10-16T00:40:14.000Z',
      'updated_at': '2021-11-30T06:52:20.000Z'
    },
    'function': {
      'id': 19,
      'name': 'Мэдээллийн Технологи',
      'nameEng': 'Information Technology',
      'homepage': true,
      'sequence': 5,
      'published_at': '2021-10-16T08:59:16.000Z',
      'created_at': '2021-10-16T00:59:16.000Z',
      'updated_at': '2021-10-20T04:59:33.000Z',
      'old_id': '610ce4e090c41e0237525883'
    },
    'sex': 'man',
    'prof': null,
    'usertitle': {
      'id': 2,
      'name': 'Идэвхтэй хэрэглэгч',
      'published_at': '2021-10-16T08:49:01.000Z',
      'created_at': '2021-10-16T00:49:01.000Z',
      'updated_at': '2021-10-27T10:06:20.000Z'
    },
    'company_size': {
      'id': 1,
      'name': '1-5 ажилтантай',
      'sequence': 1,
      'published_at': '2021-10-16T08:52:24.000Z',
      'created_at': '2021-10-16T00:38:52.000Z',
      'updated_at': '2021-10-16T00:52:24.000Z'
    },
    'firstname': 'Одбаяр',
    'lastname': 'Б. ',
    'homepage': true,
    'position': 'Хөгжүүлэгч',
    'sequence': 3,
    'profile': {
      'id': 1506,
      '_id': '6130ad5c23c5682d95f49dbc',
      'name': 'Artboard 2.jpg',
      'alternativeText': null,
      'caption': null,
      'width': 1400,
      'height': 2044,
      'formats': {
        'thumbnail': {
          'name': 'thumbnail_Artboard 2.jpg',
          'hash': 'thumbnail_Artboard_2_cd4af1d9df',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 107,
          'height': 156,
          'size': 3.37,
          'path': null,
          'url': '/uploads/thumbnail_Artboard_2_cd4af1d9df.jpg'
        }
      },
      'hash': 'Artboard_2_cd4af1d9df',
      'ext': '.jpg',
      'mime': 'image/jpeg',
      'size': 384.1,
      'url': '/uploads/Artboard_2_cd4af1d9df.jpg',
      'previewUrl': null,
      'provider': 'local',
      'provider_metadata': null,
      'created_at': '2021-09-02T10:54:20.000Z',
      'updated_at': '2021-09-02T10:54:26.000Z'
    },
    'comments': []
  }, {
    'id': 6,
    '_id': {'type': 'Buffer', 'data': [97, 48, 170, 197, 213, 121, 50, 45, 57, 142, 213, 248]},
    'username': 'tseegii',
    'email': 'ddre7117@gmail.com',
    'provider': 'local',
    'confirmed': true,
    'blocked': true,
    'role': {
      'id': 1,
      'name': 'Authenticated',
      'description': 'Default role given to authenticated user.',
      'type': 'authenticated'
    },
    'created_at': '2021-09-02T10:43:17.000Z',
    'updated_at': '2021-10-18T22:01:37.000Z',
    'usertype': {
      'id': 3,
      'name': 'Ажилтан',
      'published_at': '2021-10-16T08:49:22.000Z',
      'created_at': '2021-10-16T00:49:22.000Z',
      'updated_at': '2021-10-16T00:49:22.000Z'
    },
    'company': {
      'id': 316,
      '_id': {'type': 'Buffer', 'data': [97, 13, 12, 165, 190, 144, 158, 6, 78, 27, 53, 48]},
      'name': 'Дийг Ай Ти ХХК',
      'nameEng': 'Dig IT LLC',
      'register': '6693172',
      'description': 'Монгол улсын дижитал шилжилтийг хурдасгах, дотоодын дижитал шийдэл нийлүүлэгч компаниудыг дэлхийд танилцуулах зорилготой "Дийг Ай Ти" ХХК нь 2021 оны 4 сард байгуулагдсан. Дийг Ай Ти ХХК нь Дижитал шийдлийн цогц мэдээлэл, тэргүүлэх технологийн судалгааны Дижит платформыг үүсгэн хэрэглэгчдэд хүргэхээр хөгжүүлж байна. Дижитал бизнес, тэдний бүтээгдэхүүн, үйлчилгээг танилцуулах, хэрэглэгчдийн дуу хоолойг хүргэх, технологийн чиг хандлага, судалгаа, зөвлөгөө үйлчилгээний Дийг АЙ ХХК. ',
      'yearOfCompany': '2021',
      'directorName': 'М.Отгонбаяр',
      'directorPhone': '99055488',
      'slogan': 'Дижитал шилжилт болон ирээдүйг тэргүүлэгч – Leading Digital Transformation and Future',
      'web': 'https://digit.mn',
      'fb': 'https://www.facebook.com/dijit.mn',
      'twitter': null,
      'youtube': null,
      'phone': '99055488',
      'companyAddress': 'Хан-Уул дүүрэг Хонгор аппартмент 3 давхарт 303тоот',
      'industry': 11,
      'companyType': 1,
      'memberType': 3,
      'active': true,
      'viewNumber': 100,
      'verified': true,
      'mail': 'otgonbayar@digit.mn',
      'company_size': 1,
      'directoremail': null,
      'directorFB': null,
      'user': 2,
      'verifieddate': null,
      'direct': null,
      'strength': null,
      'likedin': null,
      'logo': {
        'id': 2654,
        '_id': null,
        'name': '206451696_2957773917793509_4326100180836544570_n.png',
        'alternativeText': '',
        'caption': '',
        'width': 360,
        'height': 360,
        'formats': {
          'thumbnail': {
            'name': 'thumbnail_206451696_2957773917793509_4326100180836544570_n.png',
            'hash': 'thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961',
            'ext': '.png',
            'mime': 'image/png',
            'width': 156,
            'height': 156,
            'size': 4.42,
            'path': null,
            'url': '/uploads/thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961.png'
          }
        },
        'hash': '206451696_2957773917793509_4326100180836544570_n_d572d88961',
        'ext': '.png',
        'mime': 'image/png',
        'size': 5.27,
        'url': '/uploads/206451696_2957773917793509_4326100180836544570_n_d572d88961.png',
        'previewUrl': null,
        'provider': 'local',
        'provider_metadata': null,
        'created_at': '2021-10-30T05:00:22.000Z',
        'updated_at': '2021-10-30T05:00:22.000Z'
      },
      'published_at': '2021-08-06T10:19:18.000Z',
      'created_at': '2021-08-06T10:19:18.000Z',
      'updated_at': '2021-10-30T05:00:24.000Z',
      '__v': 0,
      'direction': 16,
      'score': null,
      'count': null
    },
    'birthday': null,
    'phone': null,
    'companyname': null,
    'industry': {
      'id': 11,
      'name': 'Мэдээллийн технологи & Харилцаа холбоо',
      'nameEng': 'IT & Telecom',
      'sequence': 1,
      'published_at': '2021-10-16T08:40:14.000Z',
      'created_at': '2021-10-16T00:40:14.000Z',
      'updated_at': '2021-11-30T06:52:20.000Z'
    },
    'function': {
      'id': 17,
      'name': 'Бусад',
      'nameEng': 'Others',
      'homepage': true,
      'sequence': 10,
      'published_at': '2021-10-16T08:59:16.000Z',
      'created_at': '2021-10-16T00:59:16.000Z',
      'updated_at': '2021-10-20T05:00:23.000Z',
      'old_id': '610ce4e090c41e0237525881'
    },
    'sex': 'man',
    'prof': null,
    'usertitle': {
      'id': 2,
      'name': 'Идэвхтэй хэрэглэгч',
      'published_at': '2021-10-16T08:49:01.000Z',
      'created_at': '2021-10-16T00:49:01.000Z',
      'updated_at': '2021-10-27T10:06:20.000Z'
    },
    'company_size': {
      'id': 1,
      'name': '1-5 ажилтантай',
      'sequence': 1,
      'published_at': '2021-10-16T08:52:24.000Z',
      'created_at': '2021-10-16T00:38:52.000Z',
      'updated_at': '2021-10-16T00:52:24.000Z'
    },
    'firstname': 'Цэрэнгомбо',
    'lastname': 'Г. ',
    'homepage': true,
    'position': 'UX Дизайнер',
    'sequence': 4,
    'profile': {
      'id': 1505,
      '_id': '6130aae5d579322d398ed5f9',
      'name': 'Tseegii1.jpg',
      'alternativeText': null,
      'caption': null,
      'width': 1792,
      'height': 2400,
      'formats': {
        'thumbnail': {
          'name': 'thumbnail_Tseegii1.jpg',
          'hash': 'thumbnail_Tseegii1_fe619fef89',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 116,
          'height': 156,
          'size': 3.52,
          'path': null,
          'url': '/uploads/thumbnail_Tseegii1_fe619fef89.jpg'
        }
      },
      'hash': 'Tseegii1_fe619fef89',
      'ext': '.jpg',
      'mime': 'image/jpeg',
      'size': 567.26,
      'url': '/uploads/Tseegii1_fe619fef89.jpg',
      'previewUrl': null,
      'provider': 'local',
      'provider_metadata': null,
      'created_at': '2021-09-02T10:43:49.000Z',
      'updated_at': '2021-09-02T10:54:37.000Z'
    },
    'comments': []
  }, {
    'id': 1,
    '_id': {'type': 'Buffer', 'data': [97, 27, 81, 242, 225, 60, 46, 7, 14, 253, 184, 44]},
    'username': 'Gandi',
    'email': 'gandigandiik@gmail.com',
    'provider': 'local',
    'confirmed': true,
    'blocked': false,
    'role': {
      'id': 1,
      'name': 'Authenticated',
      'description': 'Default role given to authenticated user.',
      'type': 'authenticated'
    },
    'created_at': '2021-08-17T06:06:43.000Z',
    'updated_at': '2021-10-18T21:59:30.000Z',
    'usertype': {
      'id': 3,
      'name': 'Ажилтан',
      'published_at': '2021-10-16T08:49:22.000Z',
      'created_at': '2021-10-16T00:49:22.000Z',
      'updated_at': '2021-10-16T00:49:22.000Z'
    },
    'company': {
      'id': 316,
      '_id': {'type': 'Buffer', 'data': [97, 13, 12, 165, 190, 144, 158, 6, 78, 27, 53, 48]},
      'name': 'Дийг Ай Ти ХХК',
      'nameEng': 'Dig IT LLC',
      'register': '6693172',
      'description': 'Монгол улсын дижитал шилжилтийг хурдасгах, дотоодын дижитал шийдэл нийлүүлэгч компаниудыг дэлхийд танилцуулах зорилготой "Дийг Ай Ти" ХХК нь 2021 оны 4 сард байгуулагдсан. Дийг Ай Ти ХХК нь Дижитал шийдлийн цогц мэдээлэл, тэргүүлэх технологийн судалгааны Дижит платформыг үүсгэн хэрэглэгчдэд хүргэхээр хөгжүүлж байна. Дижитал бизнес, тэдний бүтээгдэхүүн, үйлчилгээг танилцуулах, хэрэглэгчдийн дуу хоолойг хүргэх, технологийн чиг хандлага, судалгаа, зөвлөгөө үйлчилгээний Дийг АЙ ХХК. ',
      'yearOfCompany': '2021',
      'directorName': 'М.Отгонбаяр',
      'directorPhone': '99055488',
      'slogan': 'Дижитал шилжилт болон ирээдүйг тэргүүлэгч – Leading Digital Transformation and Future',
      'web': 'https://digit.mn',
      'fb': 'https://www.facebook.com/dijit.mn',
      'twitter': null,
      'youtube': null,
      'phone': '99055488',
      'companyAddress': 'Хан-Уул дүүрэг Хонгор аппартмент 3 давхарт 303тоот',
      'industry': 11,
      'companyType': 1,
      'memberType': 3,
      'active': true,
      'viewNumber': 100,
      'verified': true,
      'mail': 'otgonbayar@digit.mn',
      'company_size': 1,
      'directoremail': null,
      'directorFB': null,
      'user': 2,
      'verifieddate': null,
      'direct': null,
      'strength': null,
      'likedin': null,
      'logo': {
        'id': 2654,
        '_id': null,
        'name': '206451696_2957773917793509_4326100180836544570_n.png',
        'alternativeText': '',
        'caption': '',
        'width': 360,
        'height': 360,
        'formats': {
          'thumbnail': {
            'name': 'thumbnail_206451696_2957773917793509_4326100180836544570_n.png',
            'hash': 'thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961',
            'ext': '.png',
            'mime': 'image/png',
            'width': 156,
            'height': 156,
            'size': 4.42,
            'path': null,
            'url': '/uploads/thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961.png'
          }
        },
        'hash': '206451696_2957773917793509_4326100180836544570_n_d572d88961',
        'ext': '.png',
        'mime': 'image/png',
        'size': 5.27,
        'url': '/uploads/206451696_2957773917793509_4326100180836544570_n_d572d88961.png',
        'previewUrl': null,
        'provider': 'local',
        'provider_metadata': null,
        'created_at': '2021-10-30T05:00:22.000Z',
        'updated_at': '2021-10-30T05:00:22.000Z'
      },
      'published_at': '2021-08-06T10:19:18.000Z',
      'created_at': '2021-08-06T10:19:18.000Z',
      'updated_at': '2021-10-30T05:00:24.000Z',
      '__v': 0,
      'direction': 16,
      'score': null,
      'count': null
    },
    'birthday': null,
    'phone': null,
    'companyname': 'Dig IT',
    'industry': null,
    'function': null,
    'sex': 'female',
    'prof': null,
    'usertitle': {
      'id': 3,
      'name': 'Мэргэжлийн хүн',
      'published_at': '2021-10-16T08:49:01.000Z',
      'created_at': '2021-10-16T00:49:01.000Z',
      'updated_at': '2021-10-27T10:06:51.000Z'
    },
    'company_size': {
      'id': 1,
      'name': '1-5 ажилтантай',
      'sequence': 1,
      'published_at': '2021-10-16T08:52:24.000Z',
      'created_at': '2021-10-16T00:38:52.000Z',
      'updated_at': '2021-10-16T00:52:24.000Z'
    },
    'firstname': 'Гандиймаа',
    'lastname': 'Б. ',
    'homepage': true,
    'position': 'Судлаач',
    'sequence': 5,
    'profile': {
      'id': 1507,
      '_id': '6130ae9a23c5682d95f49dbf',
      'name': '25.jpg',
      'alternativeText': null,
      'caption': null,
      'width': 1384,
      'height': 2118,
      'formats': {
        'thumbnail': {
          'name': 'thumbnail_25.jpg',
          'hash': 'thumbnail_25_071f176396',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 102,
          'height': 156,
          'size': 3.56,
          'path': null,
          'url': '/uploads/thumbnail_25_071f176396.jpg'
        }
      },
      'hash': '25_071f176396',
      'ext': '.jpg',
      'mime': 'image/jpeg',
      'size': 528.24,
      'url': '/uploads/25_071f176396.jpg',
      'previewUrl': null,
      'provider': 'local',
      'provider_metadata': null,
      'created_at': '2021-09-02T10:59:38.000Z',
      'updated_at': '2021-09-02T10:59:44.000Z'
    },
    'comments': []
  }, {
    'id': 3,
    '_id': {'type': 'Buffer', 'data': [97, 27, 82, 137, 225, 60, 46, 7, 14, 253, 184, 47]},
    'username': 'Munkhjargal',
    'email': 'umunkhjargal08@gmail.com',
    'provider': 'local',
    'confirmed': true,
    'blocked': false,
    'role': {
      'id': 1,
      'name': 'Authenticated',
      'description': 'Default role given to authenticated user.',
      'type': 'authenticated'
    },
    'created_at': '2021-08-17T06:09:13.000Z',
    'updated_at': '2021-12-16T03:15:39.000Z',
    'usertype': {
      'id': 3,
      'name': 'Ажилтан',
      'published_at': '2021-10-16T08:49:22.000Z',
      'created_at': '2021-10-16T00:49:22.000Z',
      'updated_at': '2021-10-16T00:49:22.000Z'
    },
    'company': {
      'id': 316,
      '_id': {'type': 'Buffer', 'data': [97, 13, 12, 165, 190, 144, 158, 6, 78, 27, 53, 48]},
      'name': 'Дийг Ай Ти ХХК',
      'nameEng': 'Dig IT LLC',
      'register': '6693172',
      'description': 'Монгол улсын дижитал шилжилтийг хурдасгах, дотоодын дижитал шийдэл нийлүүлэгч компаниудыг дэлхийд танилцуулах зорилготой "Дийг Ай Ти" ХХК нь 2021 оны 4 сард байгуулагдсан. Дийг Ай Ти ХХК нь Дижитал шийдлийн цогц мэдээлэл, тэргүүлэх технологийн судалгааны Дижит платформыг үүсгэн хэрэглэгчдэд хүргэхээр хөгжүүлж байна. Дижитал бизнес, тэдний бүтээгдэхүүн, үйлчилгээг танилцуулах, хэрэглэгчдийн дуу хоолойг хүргэх, технологийн чиг хандлага, судалгаа, зөвлөгөө үйлчилгээний Дийг АЙ ХХК. ',
      'yearOfCompany': '2021',
      'directorName': 'М.Отгонбаяр',
      'directorPhone': '99055488',
      'slogan': 'Дижитал шилжилт болон ирээдүйг тэргүүлэгч – Leading Digital Transformation and Future',
      'web': 'https://digit.mn',
      'fb': 'https://www.facebook.com/dijit.mn',
      'twitter': null,
      'youtube': null,
      'phone': '99055488',
      'companyAddress': 'Хан-Уул дүүрэг Хонгор аппартмент 3 давхарт 303тоот',
      'industry': 11,
      'companyType': 1,
      'memberType': 3,
      'active': true,
      'viewNumber': 100,
      'verified': true,
      'mail': 'otgonbayar@digit.mn',
      'company_size': 1,
      'directoremail': null,
      'directorFB': null,
      'user': 2,
      'verifieddate': null,
      'direct': null,
      'strength': null,
      'likedin': null,
      'logo': {
        'id': 2654,
        '_id': null,
        'name': '206451696_2957773917793509_4326100180836544570_n.png',
        'alternativeText': '',
        'caption': '',
        'width': 360,
        'height': 360,
        'formats': {
          'thumbnail': {
            'name': 'thumbnail_206451696_2957773917793509_4326100180836544570_n.png',
            'hash': 'thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961',
            'ext': '.png',
            'mime': 'image/png',
            'width': 156,
            'height': 156,
            'size': 4.42,
            'path': null,
            'url': '/uploads/thumbnail_206451696_2957773917793509_4326100180836544570_n_d572d88961.png'
          }
        },
        'hash': '206451696_2957773917793509_4326100180836544570_n_d572d88961',
        'ext': '.png',
        'mime': 'image/png',
        'size': 5.27,
        'url': '/uploads/206451696_2957773917793509_4326100180836544570_n_d572d88961.png',
        'previewUrl': null,
        'provider': 'local',
        'provider_metadata': null,
        'created_at': '2021-10-30T05:00:22.000Z',
        'updated_at': '2021-10-30T05:00:22.000Z'
      },
      'published_at': '2021-08-06T10:19:18.000Z',
      'created_at': '2021-08-06T10:19:18.000Z',
      'updated_at': '2021-10-30T05:00:24.000Z',
      '__v': 0,
      'direction': 16,
      'score': null,
      'count': null
    },
    'birthday': null,
    'phone': null,
    'companyname': null,
    'industry': {
      'id': 11,
      'name': 'Мэдээллийн технологи & Харилцаа холбоо',
      'nameEng': 'IT & Telecom',
      'sequence': 1,
      'published_at': '2021-10-16T08:40:14.000Z',
      'created_at': '2021-10-16T00:40:14.000Z',
      'updated_at': '2021-11-30T06:52:20.000Z'
    },
    'function': {
      'id': 11,
      'name': 'Харилцагчийн Үйлчилгээ',
      'nameEng': 'Customer Service',
      'homepage': true,
      'sequence': 8,
      'published_at': '2021-10-16T08:59:16.000Z',
      'created_at': '2021-10-16T00:59:16.000Z',
      'updated_at': '2021-10-20T05:00:15.000Z',
      'old_id': '610ce4e090c41e023752587b'
    },
    'sex': 'female',
    'prof': null,
    'usertitle': {
      'id': 2,
      'name': 'Идэвхтэй хэрэглэгч',
      'published_at': '2021-10-16T08:49:01.000Z',
      'created_at': '2021-10-16T00:49:01.000Z',
      'updated_at': '2021-10-27T10:06:20.000Z'
    },
    'company_size': {
      'id': 1,
      'name': '1-5 ажилтантай',
      'sequence': 1,
      'published_at': '2021-10-16T08:52:24.000Z',
      'created_at': '2021-10-16T00:38:52.000Z',
      'updated_at': '2021-10-16T00:52:24.000Z'
    },
    'firstname': 'Мөнхжаргал',
    'lastname': 'Б. ',
    'homepage': true,
    'position': 'Судлаач',
    'sequence': 6,
    'profile': {
      'id': 2374,
      '_id': null,
      'name': 'Munkhjargal - Copy.jpg',
      'alternativeText': '',
      'caption': '',
      'width': 2029,
      'height': 2553,
      'formats': {
        'thumbnail': {
          'name': 'thumbnail_Munkhjargal - Copy.jpg',
          'hash': 'thumbnail_Munkhjargal_Copy_67085f0a3b',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 124,
          'height': 156,
          'size': 3.9,
          'path': null,
          'url': '/uploads/thumbnail_Munkhjargal_Copy_67085f0a3b.jpg'
        },
        'large': {
          'name': 'large_Munkhjargal - Copy.jpg',
          'hash': 'large_Munkhjargal_Copy_67085f0a3b',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 795,
          'height': 1000,
          'size': 58.18,
          'path': null,
          'url': '/uploads/large_Munkhjargal_Copy_67085f0a3b.jpg'
        },
        'medium': {
          'name': 'medium_Munkhjargal - Copy.jpg',
          'hash': 'medium_Munkhjargal_Copy_67085f0a3b',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 596,
          'height': 750,
          'size': 36.36,
          'path': null,
          'url': '/uploads/medium_Munkhjargal_Copy_67085f0a3b.jpg'
        },
        'small': {
          'name': 'small_Munkhjargal - Copy.jpg',
          'hash': 'small_Munkhjargal_Copy_67085f0a3b',
          'ext': '.jpg',
          'mime': 'image/jpeg',
          'width': 397,
          'height': 500,
          'size': 19.1,
          'path': null,
          'url': '/uploads/small_Munkhjargal_Copy_67085f0a3b.jpg'
        }
      },
      'hash': 'Munkhjargal_Copy_67085f0a3b',
      'ext': '.jpg',
      'mime': 'image/jpeg',
      'size': 325.37,
      'url': '/uploads/Munkhjargal_Copy_67085f0a3b.jpg',
      'previewUrl': null,
      'provider': 'local',
      'provider_metadata': null,
      'created_at': '2021-10-19T11:58:47.000Z',
      'updated_at': '2021-10-19T11:58:47.000Z'
    },
    'comments': []
  }]
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: '700',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
          justifyContent={'center'}
        >
          Манай хамт олон
        </Typography>
        <Divider style={{width: '12%', background: 'orange', marginLeft: '44%'}}/>
        <Divider style={{width: '12%', background: 'orange', marginLeft: '44%'}}/>
        <Divider style={{width: '12%', background: 'orange', marginLeft: '44%'}}/>
      </Box>
      <Grid container spacing={2}>
        {users.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box component={CardActionArea}>
              <Box
                component={Card}
                borderRadius={3}
                boxShadow={3}
                alignItems={'center'}
                justifyContent={'center'}
                height={400}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >

                <CardContent align={'center'}>
                  {/* <Box
                    component={Avatar}
                    src={item.profile ? assetAPIURL + item.profile.url : "" }                    
                    height={240}
                    width={180}
                    style={{backgroundSize: '100% 100%'}}
                  /> */}
                  <CardMedia
                    image={assetAPIURL + item.profile.url}
                    sx={{
                      height: 220,
                      width: 220,
                      backgroundSize: '100% 100% ',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  />
                  <Box marginTop={4}>
                    {/* <ListItemText primary={item.lastname + item.firstname} secondary={item.position} /> */}
                    <Typography fontWeight={'700'} variant={'h5'} color={'black'}>
                      {item.lastname + item.firstname}
                    </Typography>
                    <Typography variant={'subtitle2'} color={'textSecondary'}>
                      {item.position}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Team
