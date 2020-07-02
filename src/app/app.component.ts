import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {
      title: 'Augmented Torso Frame',
      lore: 'Protects the most important parts, with some unexpected magical perks.',
      img: 'assets/img/power_leather.jpg',
      focus: false,
      description: [
        '+2 Leather Armor',
        'AC 13 + Dex Modifier',
        'A supplemental armor for dealing with the physical demands of steam engineering by strengthing the upper body.',
        'The wearer has resistance to slashing damage and proficiency with Strength checks.'
      ]
    },
    {
      title: 'Full Auto Crossbow',
      lore: 'The steam-smiths were trying to make a nail gun, instead they made a war crime.',
      img: 'assets/img/crossbow.jpg',
      focus: false,
      description: [
        'A +2 Heavy Auto Crossbow',
        'Tags: Heavy, Ranged, 2-Handed',
        'Grants the "Crossbow Expert" feat while equipped.',
        'You can shoot 2 bolts in a single action, each doing 1d6+2 piercing damage. You can target one or 2 targets, using the same attack and damage roll for each bolt.'
      ]
    },
    {
      title: 'Steamsmithing Goggles',
      lore: 'An essential piece of safety gear for delicate crafting work, only some of the attachments are cosmetic.',
      img: 'assets/img/steampunk_goggles.jpg',
      focus: false,
      description: [
        'Adds +2 to Wisdom',
        'The wearer has resistance to Lightning damage, and advantage on saves against being Stunned, Paralyzed, and Blinded.'
      ]
    },
    {
      title: 'Staff of Forging',
      lore: 'Smithing tool reserved for elite forgemancers and wizards who like to start fires.',
      img: 'assets/img/fire_staff.jpg',
      focus: false,
      description: [
        'A +2 Arcane Spellcasting Focus',
        'You have resistance to fire damage while you hold this staff',
        'The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: burning hands (1 charge), fireball (3 charges), or wall of fire (4 charges)',
        'The staff regains 1d6 + 4 expended charges daily at dawn.'
      ]
    },
    {
      title: 'Forgemaster Gauntlet',
      lore: 'For when handling with care isn\'t an option.',
      img: 'assets/img/gauntlet.jpg',
      focus: false,
      description: [
        'While wearing this gauntlet you have +2 AC and resistance to fire damage',
        'The first time an enemy strikes you in combat you can cast Hellish Rebuke as a reaction',
        'While wearing this gauntlet you have disadvantage on Slight of Hand checks that require the gauntleted hand'
      ],
      links: [
        {
          text: 'Hellish Rebuke',
          url: 'https://www.dndbeyond.com/spells/hellish-rebuke'
        }
      ]
    },
    {
      title: 'Twitter Influencer Cloak',
      lore: 'Created for the Druids operating the Twitter network.',
      img: 'assets/img/animal_cloak.jpg',
      focus: false,
      description: [
        'Adds +2 to Charisma',
        'While wearing this cloak you can Speak with Animals, have resistance to Thunder damage, and advantage on saving throws against being Deafened.'
      ],
      links: [
        {
          text: 'Speak with Animals',
          url: 'https://www.dndbeyond.com/spells/speak-with-animals'
        }
      ]
    },
    {
      title: 'Onyx Lute',
      lore: 'Custom-cursed by the witches of Deathmyst Peninsula.',
      img: 'assets/img/onyx_lute.jpg',
      focus: false,
      description: [
        'A +2 Bardic Focus',
        'If you are proficient in lutes and play this instrument as part of a Performance check any rolls less than your Charisma score are counted as being equal to your Charisma score.',
        'Once per day the Onyx Lute can cast Immolation.  This does not expend a spell slot.  After using this feature roll a d20, on a 1 the Onyx Lute must be re-cursed by a powerful witch before this feature can be used again.'
      ],
      links: [
        {
          text: 'Immolation',
          url: 'https://www.dndbeyond.com/spells/immolation'
        }
      ]
    },
    {
      title: 'Staff of Quenching',
      lore: 'Smithing tool reserved for elite forgemancers and wizards who like to freeze things.',
      img: 'assets/img/ice_staff.jpg',
      focus: false,
      description: [
        'A +2 Arcane Spellcasting Focus',
        'You have resistance to frost damage while you hold this staff',
        'The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: cone of cold (5 charges), fog cloud (1 charge), ice storm (4 charges), or wall of ice (4 charges).',
        'The staff regains 1d6 + 4 expended charges daily at dawn.'
      ]
    },
    {
      title: 'Evil Resistant Armor',
      lore: 'Top notch armor for combatting evil creatures.',
      img: 'assets/img/dark_armor.jpg',
      focus: false,
      description: [
        '+2 Studded Leather Armor',
        'AC 14 + Dex Modifier',
        'Blessed leather for combatting the everyday hazards of witch hunting and vampire slaying.',
        'The wearer is resistant to necrotic damage, has advantage on Wisdom saving throws caused by evil creatures, and is immune to being frightened by evil creatures.'
      ]
    },
    {
      title: 'Belt of Dwarvenkind',
      lore: 'A wonderous item for true dwarf friends',
      img: 'assets/img/dwarven_belt.jpg',
      focus: false,
      description: [
        'While wearing this belt your Constitution score increases by 2, to a maximum of 20, and you have advantage on Charisma (Persuasion) checks made to interact with dwarves.',
        'While attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you\'re capable of growing one, or a visibly thicker beard if you already have one.',
        'If you aren\'t a dwarf, you gain the following additional benefits while wearing the belt:',
        ' * You have advantage on saving throws against poison, and you have resistance against poison damage.',
        ' * You have darkvision out to a range of 60 feet.',
        ' * You can speak, read, and write Dwarvish.'
      ]
    },
    {
      title: 'Swamphunter Bow',
      lore: 'Repossessed from a witch hunter in Deathmyst Peninsula.',
      img: 'assets/img/hunter_bow.jpg',
      focus: false,
      description: [
        'A +2 Magical Longbow',
        'Damage: 1d8+2 piercing',
        'Tags: Heavy, Ranged, 2-Handed',
        'This bow has 3 charges that regenerate 1d4-1 charges daily at dawn. As a bonus action you may expend a charge and use one of the following effects:',
        ' * Heal yourself 1d8+4 Hit Points',
        ' * Add +2 to the DC of your next spell.',
        ' * The next arrow fired with this bow becomes a magical fire arrow. When hit with one of these arrows, the target takes an additional 1d8+4 fire damage.',
        ' * Cast the druidcraft spell'
      ],
      links: [
        {
          text: 'Druidcraft',
          url: 'https://www.dndbeyond.com/spells/druidcraft'
        }
      ]
    },
    {
      title: 'Clockwork Violin',
      lore: 'An inexplicable hodgepodge of art and science, functions as a clock, violin, and weapon of mass destruction.',
      img: 'assets/img/violin.jpg',
      focus: false,
      description: [
        'A +2 Bardic Focus',
        'Can be used to tell time, which is cool.',
        'If you are proficient in violin and play this instrument as part of a Performance check any rolls less than your Charisma score are counted as being equal to your Charisma score.',
        'Once per day the Clockwork Violin can cast Destructive Wave.  This does not expend a spell slot.  After using this feature roll a d20, on a 1 the Clockwork Violin must be repaired by a steamsmith before this feature can be used again.'
      ],
      links: [
        {
          text: 'Destructive Wave',
          url: 'https://www.dndbeyond.com/spells/destructive-wave'
        }
      ]
    }
  ];

  toggleFocus(clickedItem: any) {
    const initialState = clickedItem.focus;

    for (const item of this.items) {
      item.focus = false;
    }

    clickedItem.focus = !initialState;
  }

  getCardStyle(cardItem: any) {
    return {
      card: true,
      'item-card': true,
      'col-md-3': !cardItem.focus,
      'col-md-6': cardItem.focus
    }
  }
}
