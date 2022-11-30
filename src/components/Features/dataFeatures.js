import checkmark from '../../images/checkmark.svg'

const dataFeatures = [
    {
        id: 1,
        title: 'Для бизнеса',
        description: `Создаем кастомизированные программы и сервисы
для развития управленческих команд в российских и
международных компаниях`
    },
    {
        id: 2,
        title: 'Для колл-центров',
        description: `Помогаем руководителям и командам колл-центров создать полный цикл по поддержке клиентов и
организовать контроль качества`
    },
    {
        id: 3,
        title: 'Облачные хранилища',
        description: `Разрабатываем локальные защищенные
корпоративные хранилища, а также осуществляем
поддержку на протяжении всего времени
пользования`
    },
]

// dataFeatures.forEach((_, i) => dataFeatures[i]['imageSrc'] = checkmark)

export { dataFeatures as FeaturesList, checkmark as imgCheckMark }