// try {
//   ymaps.ready(init);
//
//   function init() {
//     var myMap = new ymaps.Map("terminalMmap", {
//           center: [41.269641 , 66.446016],
//           zoom: 5,
//         }, {
//           searchControlProvider: 'yandex#search'
//         }),
//
//         // Создаем геообъект с типом геометрии "Точка".
//         myGeoObject = new ymaps.GeoObject(),
//         myPieChart = new ymaps.Placemark(
//
//         );
//     myMap.behaviors.disable('scrollZoom');
//     myMap.geoObjects
//         .add(myGeoObject)
//         .add(myPieChart)
//         .add(new ymaps.Placemark([40.781517,72.334620], {
//           balloonContent: ' <strong>Andijan</strong>'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([39.783007,64.418338], {
//           balloonContent: '<strong>Buxara</strong> '
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([40.103406,67.837231], {
//           balloonContent: ' <strong>Djizzakh</strong>'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([40.996641,71.637361], {
//           balloonContent: ' <strong>Namangan</strong>'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([42.456084, 59.611377], {
//           balloonContent: ' <strong>Nukus</strong>'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([39.402046, 66.537943], {
//           balloonContent: ' <strong>Samarkand</strong>'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([37.224879, 67.323740], {
//           balloonContent: ' <strong>Termez</strong>',
//           iconCaption: 'Очень длиннный, но невероятно интересный текст'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([41.561344, 60.626888], {
//           balloonContent: ' <strong>Urgench</strong>',
//           iconCaption: 'Очень длиннный, но невероятно интересный текст'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([40.382263, 71.785412], {
//           balloonContent: ' <strong>Fargona</strong>',
//           iconCaption: 'Очень длиннный, но невероятно интересный текст'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([38,8379660,65,7978660], {
//           balloonContent: ' <strong>Qarshi</strong>',
//           iconCaption: 'Очень длиннный, но невероятно интересный текст'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([40.491561,68.775203], {
//           balloonContent: ' <strong>Gulistan</strong>',
//           iconCaption: 'Очень длиннный, но невероятно интересный текст'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }))
//         .add(new ymaps.Placemark([40,1106,65,65,37456], {
//           balloonContent: ' <strong>Navoi</strong>',
//           iconCaption: 'Очень длиннный, но невероятно интересный текст'
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: 'img/terminal-marker.png',
//           iconImageSize: [18, 20],
//         }));
//   }
//
// } catch (e) {
//
// }
