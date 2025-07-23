interface Props {
    name: string;
    description: string;
    urlIcone: string;
}

export const SkillCard = ({ name, description }: Props) => {
    return (
        <div>
            <h3>{name}</h3>
            {name}
            {description}
        </div>
    );

};

