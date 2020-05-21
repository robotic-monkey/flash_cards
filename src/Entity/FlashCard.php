<?php

namespace App\Entity;

use App\Repository\FlashCardRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FlashCardRepository::class)
 */
class FlashCard
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $side_a;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $side_b;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $side_c;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $side_d;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $category;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $section;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $primitives = [];

    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSideA(): ?string
    {
        return $this->side_a;
    }

    public function setSideA(string $side_a): self
    {
        $this->side_a = $side_a;

        return $this;
    }

    public function getSideB(): ?string
    {
        return $this->side_b;
    }

    public function setSideB(string $side_b): self
    {
        $this->side_b = $side_b;

        return $this;
    }

    public function getSideC(): ?string
    {
        return $this->side_c;
    }

    public function setSideC(string $side_c): self
    {
        $this->side_c = $side_c;

        return $this;
    }

    public function getSideD(): ?string
    {
        return $this->side_d;
    }

    public function setSideD(?string $side_d): self
    {
        $this->side_d = $side_d;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getSection(): ?int
    {
        return $this->section;
    }

    public function setSection(?int $section): self
    {
        $this->section = $section;

        return $this;
    }

    public function getPrimitives(): ?array
    {
        return $this->primitives;
    }

    public function setPrimitives(?array $primitives): self
    {
        $this->primitives = $primitives;

        return $this;
    }

    public function toArray()
    {
        return ['id' => $this->id, 'side_a'=> $this->side_a, 'side_b'=> $this->side_b, 'side_c'=> $this->side_c,'side_d'=> $this->side_d,'category'=> $this->category, 'section'=> $this->section, 'primitives'=> $this->primitives ];
    }
}
