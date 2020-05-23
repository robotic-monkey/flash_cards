<?php

namespace App\Entity;

use App\Repository\RadicalsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RadicalsRepository::class)
 */
class Radicals
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
    private $kanji_rad;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $meaning;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getKanjiRad(): ?string
    {
        return $this->kanji_rad;
    }

    public function setKanjiRad(string $kanji_rad): self
    {
        $this->kanji_rad = $kanji_rad;

        return $this;
    }

    public function getMeaning(): ?string
    {
        return $this->meaning;
    }

    public function setMeaning(string $meaning): self
    {
        $this->meaning = $meaning;

        return $this;
    }

    public function toArray()
    {
        return ['id' => $this->id, 'kanji_rad'=> $this->kanji_rad, 'meaning'=> $this->meaning];
    }
}
